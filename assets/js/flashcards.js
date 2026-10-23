(function () {
  const STORAGE_KEY = 'motionsplan_flashcards';
  const OPT_OUT_KEY = 'motionsplan_disable_flashcards';

  // 1. Parser Anki-style Cloze deletion: {{c1::svar}} eller {{c1::svar::hint}}
  function parseAnkiCloze(text) {
    if (!text) return null;
    const clozeRegex = /\{\{c\d+::([^:]+?)(?:::([^:]+?))?\}\}/g;
    if (!clozeRegex.test(text)) return null;

    clozeRegex.lastIndex = 0;
    const frontText = text.replace(clozeRegex, (match, answer, hint) => {
      const placeholder = hint ? `[${hint}]` : '[...]';
      return `<span class="mp-cloze-blank">${placeholder}</span>`;
    });

    clozeRegex.lastIndex = 0;
    const backText = text.replace(clozeRegex, (match, answer) => {
      return `<span class="mp-cloze-revealed">${answer}</span>`;
    });

    return { front: frontText, back: backText };
  }

  function getStoredData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveData(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch (e) {}
  }

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
        card.classList.remove('flipped');
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

  // Gå til næste kort i stakken
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
      // Skjul kortstakken og vis fuldført-boksen
      mainStack.style.display = 'none';
      const completeBox = container.querySelector('.mp-stack-complete');
      if (completeBox) completeBox.style.display = 'flex';
    }
  }

  // Opsætning af events for det enkelte kort
  function setupCardEvents(container, wrapper, memoryStore) {
    if (wrapper.dataset.initialized === 'true') return;
    wrapper.dataset.initialized = 'true';

    const id = wrapper.dataset.id;
    const url = wrapper.dataset.url;
    const title = wrapper.dataset.title;
    const frontContent = wrapper.querySelector('.mp-card-front .mp-card-content');
    const backContent = wrapper.querySelector('.mp-card-back .mp-card-content');
    const questionTextEl = wrapper.querySelector('.mp-question-text');
    const answerTextEl = wrapper.querySelector('.mp-answer-text');

    // Håndter Anki Cloze syntax
    if (questionTextEl) {
      const clozeData = parseAnkiCloze(questionTextEl.innerHTML);
      if (clozeData) {
        questionTextEl.innerHTML = clozeData.front;
        if (answerTextEl) {
          const existingText = answerTextEl.innerHTML.trim();
          if (!existingText || existingText === '<p></p>') {
            answerTextEl.innerHTML = `<p class="mp-cloze-sentence">${clozeData.back}</p>`;
          } else {
            answerTextEl.innerHTML = `<div class="mp-cloze-sentence">${clozeData.back}</div>${existingText}`;
          }
        }
      }
    }

    // Gem baseline-data i hukommelsen (skrives samlet til disk senere)
    if (!memoryStore[id]) {
      memoryStore[id] = { id, ease: 2.5, reps: 0, interval: 0, nextReview: new Date().toISOString() };
    }
    if (frontContent && backContent) {
      memoryStore[id].front = frontContent.innerHTML;
      memoryStore[id].back = backContent.innerHTML;
      memoryStore[id].url = url;
      memoryStore[id].title = title;
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
          wrapper.parentElement.appendChild(wrapper);
          refreshBottomStack();
        } else {
          advanceMainStack(container, wrapper);
        }
      };
    });

    // 3. Svarmuligheder (Multiple Choice & Sandt/Falsk)
    const grid = wrapper.querySelector('.mp-options-grid');
    if (grid) {
      const btns = Array.from(grid.children);
      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

      // Bland kun knapperne hvis der er mere end 2 muligheder (bevar Sandt/Falsk rækkefølge)
      if (btns.length > 2) {
        for (let i = btns.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          grid.appendChild(btns[j]);
        }
      }

      Array.from(grid.children).forEach((btn, idx) => {
        const letterSpan = btn.querySelector('.mp-option-letter');
        if (letterSpan && btns.length > 2) {
          letterSpan.textContent = letters[idx] || '';
        }

        btn.onclick = (e) => {
          e.preventDefault();
          const isCorrect = btn.dataset.correct === 'true';
          const resultBadge = wrapper.querySelector('.mp-user-result-badge');

          if (resultBadge) {
            resultBadge.textContent = isCorrect ? "Korrekt! 🎉" : "Forkert ❌";
            resultBadge.className = `mp-user-result-badge ${isCorrect ? 'correct' : 'wrong'}`;
          }

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
        const currentStore = getStoredData();

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
              // Hvis en dedikeret bundstak findes, flyt kortet dertil
              stackData.cardStack.appendChild(wrapper);
              refreshBottomStack();
            } else {
              // FALLBACK: Hvis ingen bundstak findes på siden, læg kortet bagerst i nuværende bunke
              const currentDeck = container.querySelector('.mp-card-stack');
              if (currentDeck) {
                currentDeck.appendChild(wrapper);
                currentDeck.style.display = 'block'; // Sikr at stakken forbliver synlig
                const completeBox = container.querySelector('.mp-stack-complete');
                if (completeBox) completeBox.style.display = 'none';
              }
            }
          } else {
            // Hvis det allerede er i bundstakken, ryk det bagerst
            wrapper.classList.remove('flipped');
            wrapper.parentElement.appendChild(wrapper);
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

  // Beregner og opdaterer fremskridt for alle stakke på siden
function updateDeckBadges() {
  const store = getStoredData();

  document.querySelectorAll('[data-deck-badge]').forEach(badge => {
    const deckId = badge.dataset.deckBadge;
    const panel = document.getElementById('quiz-' + deckId);
    if (!panel) return;

    const cards = panel.querySelectorAll('.mp-card-wrapper');
    const totalCount = cards.length;
    let completedCount = 0;

    cards.forEach(card => {
      const cardId = card.dataset.id;
      // Et kort tæller som besvaret, hvis det er vurderet mindst 1 gang
      if (store[cardId] && store[cardId].reps > 0) {
        completedCount++;
      }
    });

    // Opdater tal i DOM
    const doneEl = badge.querySelector('.mp-done-count');
    if (doneEl) doneEl.textContent = completedCount;

    // Tilføj grøn fuldført-markør på knappen hvis alt er klaret
    const parentBtn = badge.closest('.mp-cat-btn');
    if (parentBtn) {
      if (completedCount >= totalCount && totalCount > 0) {
        parentBtn.classList.add('is-completed');
      } else {
        parentBtn.classList.remove('is-completed');
      }
    }
  });
}

  // Hoved-initialisering
  function initFlashcards() {
    if (localStorage.getItem(OPT_OUT_KEY) === 'true') {
      document.querySelectorAll('.mp-flashcard-stack-container').forEach(el => el.style.display = 'none');
      return;
    }

    const memoryStore = getStoredData();

    document.querySelectorAll('.mp-flashcard-stack-container').forEach(container => {
      if (container.id === 'mp-bottom-stack') return;

      const optoutOverlay = container.querySelector('.mp-optout-overlay');
      container.querySelectorAll('.mp-btn-close-trigger').forEach(btn => {
        btn.onclick = () => {
          if (optoutOverlay) optoutOverlay.style.display = 'flex';
        };
      });

      if (optoutOverlay) {
        const disableBtn = optoutOverlay.querySelector('.mp-btn-optout-disable');
        const keepBtn = optoutOverlay.querySelector('.mp-btn-optout-keep');
        if (disableBtn) {
          disableBtn.onclick = () => {
            localStorage.setItem(OPT_OUT_KEY, 'true');
            document.querySelectorAll('.mp-flashcard-stack-container').forEach(el => el.style.display = 'none');
          };
        }
        if (keepBtn) {
          keepBtn.onclick = () => {
            optoutOverlay.style.display = 'none';
          };
        }
      }

      container.querySelectorAll('.mp-card-wrapper').forEach(wrapper => {
        setupCardEvents(container, wrapper, memoryStore);
      });
    });

    // Skriv én samlet batch til localStorage i stedet for 1 skrivning pr. kort
    saveData(memoryStore);
    updateDeckBadges();
  }

  // Sikrer kørsel uanset om DOM allerede er parset
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlashcards);
  } else {
    initFlashcards();
  }
})();