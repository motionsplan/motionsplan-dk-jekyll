document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'motionsplan_flashcards';
  const OPT_OUT_KEY = 'motionsplan_disable_flashcards';

  // Skjul moduler hvis brugeren har valgt opt-out
  if (localStorage.getItem(OPT_OUT_KEY) === 'true') {
    document.querySelectorAll('.mp-flashcard-stack-container').forEach(el => el.style.display = 'none');
    return;
  }

  function getStoredData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveData(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch (e) {}
  }

  // Finder den eksisterende bundstak fra din HTML og sikrer indre container (.mp-card-stack)
  function getBottomStack() {
    const bottomStack = document.getElementById('mp-bottom-stack');
    if (!bottomStack) return null;

    let cardStack = bottomStack.querySelector('.mp-card-stack');
    if (!cardStack) {
      cardStack = document.createElement('div');
      cardStack.className = 'mp-card-stack';
      bottomStack.appendChild(cardStack);
    }
    return { bottomStack, cardStack };
  }

// Opdaterer bundstakken (viser KUN det første svære kort ad gangen)
  function refreshBottomStack() {
    const bottomData = getBottomStack();
    if (!bottomData) return;

    const { bottomStack, cardStack } = bottomData;
    const cards = Array.from(cardStack.children).filter(child => child.classList.contains('mp-card-wrapper'));

    if (cards.length === 0) {
      bottomStack.style.display = 'none';
    } else {
      bottomStack.style.display = 'block';
      cards.forEach((card, index) => {
        card.classList.remove('flipped'); // Vis altid spørgsmålet (forsiden) først!
        if (index === 0) {
          card.classList.add('is-active');
          card.style.display = 'block';
        } else {
          card.classList.remove('is-active');
          card.style.display = 'none';
        }
      });
    }
  }

  // SM-2 Algoritme (Spaced Repetition)
  function calculateSM2(card, rating) {
    let ease = card.ease || 2.5;
    let reps = card.reps || 0;
    let interval = card.interval || 0;
    const nextReview = new Date();

    if (rating === 'hard') {
      reps = 0;
      interval = 0;
      ease = Math.max(1.3, ease - 0.2);
      nextReview.setSeconds(nextReview.getSeconds() - 1);
    } else if (rating === 'good') {
      reps += 1;
      interval = reps === 1 ? 1 : reps === 2 ? 6 : Math.round(interval * ease);
      nextReview.setDate(nextReview.getDate() + interval);
    } else if (rating === 'easy') {
      reps += 1;
      interval = reps === 1 ? 4 : Math.round(interval * ease * 1.3);
      ease += 0.15;
      nextReview.setDate(nextReview.getDate() + interval);
    }

    return { ease: parseFloat(ease.toFixed(2)), reps, interval, nextReview: nextReview.toISOString() };
  }

  // Gå til næste kort i hovedstakken
  function advanceMainStack(container, currentWrapper) {
    const mainStack = container.querySelector('.mp-card-stack');
    if (!mainStack) return;

    const cards = Array.from(mainStack.children).filter(child => child.classList.contains('mp-card-wrapper'));
    const currentIndex = cards.indexOf(currentWrapper);
    const nextWrapper = cards[currentIndex + 1];

    currentWrapper.classList.remove('is-active', 'flipped');
    currentWrapper.style.display = 'none';

    if (nextWrapper) {
      nextWrapper.classList.add('is-active');
      nextWrapper.style.display = 'block';
    } else {
      // Skjul selve kort-containeren, så den ikke fylder tom plads!
      mainStack.style.display = 'none';

      // Vis gennemført-boksen helt oppe under knapperne
      const completeBox = container.querySelector('.mp-stack-complete');
      if (completeBox) {
        completeBox.style.display = 'flex';
      }
    }
  }

  // Opsætning af events for det enkelte kort
  function setupCardEvents(container, wrapper) {
    const id = wrapper.dataset.id;
    const url = wrapper.dataset.url;
    const title = wrapper.dataset.title;
    const frontContent = wrapper.querySelector('.mp-card-front .mp-card-content');
    const backContent = wrapper.querySelector('.mp-card-back .mp-card-content');

    // Gem baseline-data i localStorage
    let store = getStoredData();
    if (!store[id]) store[id] = { id, ease: 2.5, reps: 0, interval: 0, nextReview: new Date().toISOString() };
    if (frontContent && backContent) {
      store[id].front = frontContent.innerHTML;
      store[id].back = backContent.innerHTML;
      store[id].url = url;
      store[id].title = title;
      saveData(store);
    }

    // 1. Vend kort knap
    const flipBtn = wrapper.querySelector('.mp-btn-flip');
    if (flipBtn) {
      flipBtn.onclick = (e) => {
        e.preventDefault();
        wrapper.classList.add('flipped');
      };
    }

    // 2. Skip knap
    wrapper.querySelectorAll('.mp-btn-skip').forEach(skipBtn => {
      skipBtn.onclick = (e) => {
        e.preventDefault();
        const isInBottom = wrapper.closest('#mp-bottom-stack');
        if (isInBottom) {
          const cardStack = wrapper.parentElement;
          cardStack.appendChild(wrapper);
          refreshBottomStack();
        } else {
          advanceMainStack(container, wrapper);
        }
      };
    });

    // 3. Multiple Choice knapper
    // Auto-shuffle af options og tjek af facit
const grid = wrapper.querySelector('.mp-options-grid');

if (grid) {
  const btns = Array.from(grid.children);
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  // 1. Scramble (bland) knapperne i tilfældig rækkefølge (Fisher-Yates Algorithm)
  for (let i = btns.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    grid.appendChild(btns[j]);
  }

  // 2. Tildel nye A, B, C... bogstaver ud fra den nye rækkefølge
  Array.from(grid.children).forEach((btn, idx) => {
    const letterSpan = btn.querySelector('.mp-option-letter');
    if (letterSpan) letterSpan.textContent = letters[idx] || '';

    // 3. Klik-event: Tjek om denne knap var den oprindelige muligheden nr. 1
    btn.onclick = (e) => {
      e.preventDefault();
      const isCorrect = btn.dataset.correct === 'true';
      const resultBadge = wrapper.querySelector('.mp-user-result-badge');

      if (resultBadge) {
        if (isCorrect) {
          resultBadge.textContent = "Korrekt! 🎉";
          resultBadge.className = "mp-user-result-badge correct";
        } else {
          resultBadge.textContent = "Forkert ❌";
          resultBadge.className = "mp-user-result-badge wrong";
        }
      }

      // Vend kortet om til forklaringen
      wrapper.classList.add('flipped');
    };
  });
}

    // 4. Rating knapper (🔴 Svær, 🟡 OK, 🟢 Let)
    wrapper.querySelectorAll('[data-rating]').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const rating = btn.dataset.rating;
        let currentStore = getStoredData();

        // Gem opdateret historik
        const updatedStats = calculateSM2(currentStore[id] || { ease: 2.5, reps: 0, interval: 0 }, rating);
        currentStore[id] = { ...currentStore[id], ...updatedStats };
        saveData(currentStore);

        const isInBottom = wrapper.closest('#mp-bottom-stack');

        if (rating === 'hard') {
          if (!isInBottom) {
            const stackData = getBottomStack();
            advanceMainStack(container, wrapper);
            wrapper.classList.remove('flipped', 'is-active');

            if (stackData) {
              // Hægt kortet på bundstakken
              stackData.cardStack.appendChild(wrapper);
              setupCardEvents(stackData.bottomStack, wrapper); // Gen-bind events til bundstak context
              refreshBottomStack();
            }
          } else {
            // Hvis det allerede var i bunden, skub det bagerst i køen
            const cardStack = wrapper.parentElement;
            wrapper.classList.remove('flipped');
            cardStack.appendChild(wrapper);
            refreshBottomStack();
          }
        } else {
          // OK eller Let
          if (isInBottom) {
            wrapper.remove();
            refreshBottomStack();
          } else {
            advanceMainStack(container, wrapper);
          }
        }
      };
    });
  }

  // Initialiser alle stakke på siden (undtagen bundstakken)
  document.querySelectorAll('.mp-flashcard-stack-container').forEach(container => {
    if (container.id === 'mp-bottom-stack') return;

    // Inline opt-out dialog (✕)
    const optoutOverlay = container.querySelector('.mp-optout-overlay');
    container.querySelectorAll('.mp-btn-close-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        if (optoutOverlay) optoutOverlay.style.display = 'flex';
      });
    });

    if (optoutOverlay) {
      const disableBtn = optoutOverlay.querySelector('.mp-btn-optout-disable');
      const keepBtn = optoutOverlay.querySelector('.mp-btn-optout-keep');
      if (disableBtn) {
        disableBtn.addEventListener('click', () => {
          localStorage.setItem(OPT_OUT_KEY, 'true');
          document.querySelectorAll('.mp-flashcard-stack-container').forEach(el => el.style.display = 'none');
        });
      }
      if (keepBtn) {
        keepBtn.addEventListener('click', () => {
          optoutOverlay.style.display = 'none';
        });
      }
    }

    // Bind events til alle kort i hovedstakken
    container.querySelectorAll('.mp-card-wrapper').forEach(wrapper => {
      setupCardEvents(container, wrapper);
    });
  });
});