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

  // Viser et kompakt resultat og "Tag igen"-knap på én vandret linje
  function renderCompleteBoxUI(container, completeBox) {
    const store = getStoredData();
    const allCards = Array.from(container.querySelectorAll('.mp-card-wrapper'));
    const mcCards = allCards.filter(c => c.querySelector('.mp-options-grid'));
    
    let dynamicContainer = completeBox.querySelector('.mp-complete-dynamic-content');
    if (!dynamicContainer) dynamicContainer = completeBox;
    dynamicContainer.innerHTML = '';

    const row = document.createElement('div');
    row.style.cssText = 'display: inline-flex; align-items: center; justify-content: center; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 14px;';

    const resultSpan = document.createElement('span');
    resultSpan.style.cssText = 'font-size: 0.95rem; font-weight: 700; color: #1e293b;';

    if (mcCards.length > 0) {
      let correctCount = 0;
      mcCards.forEach(c => {
        const cId = c.dataset.id;
        if (c.dataset.mcCorrect === 'true' || (store[cId] && store[cId].mcCorrect === true)) {
          correctCount++;
        }
      });
      const pct = Math.round((correctCount / mcCards.length) * 100);
      resultSpan.textContent = `Resultat: ${correctCount} / ${mcCards.length} (${pct}%)`;
    } else {
      resultSpan.textContent = `✓ Alle ${allCards.length} kort gennemgået`;
    }

    const restartBtn = document.createElement('button');
    restartBtn.type = 'button';
    restartBtn.textContent = '🔄 Tag igen';
    restartBtn.style.cssText = 'background: #ffffff; color: #475569; border: 1px solid #cbd5e1; padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: background 0.15s ease;';
    restartBtn.onmouseover = () => restartBtn.style.background = '#f1f5f9';
    restartBtn.onmouseout = () => restartBtn.style.background = '#ffffff';

    restartBtn.onclick = () => restartDeck(container, completeBox);

    row.appendChild(resultSpan);
    row.appendChild(restartBtn);
    dynamicContainer.appendChild(row);
  }

  // Nulstiller et dæk, så det kan tages forfra
  function restartDeck(container, completeBox) {
    const store = getStoredData();
    const mainStack = container.querySelector('.mp-card-stack');
    const cards = Array.from(mainStack.children).filter(child => child.classList.contains('mp-card-wrapper'));

    cards.forEach((card, index) => {
      const id = card.dataset.id;
      if (store[id]) {
        store[id].answered = false;
        store[id].reps = 0;
        store[id].interval = 0;
        delete store[id].mcCorrect;
      }

      delete card.dataset.answered;
      delete card.dataset.mcAnswered;
      delete card.dataset.mcCorrect;
      card.classList.remove('flipped');

      const badge = card.querySelector('.mp-user-result-badge');
      if (badge) {
        badge.textContent = '';
        badge.className = 'mp-user-result-badge';
      }

      // Nulstil forsidens vend-knap
      const flipBtn = card.querySelector('.mp-btn-flip');
      const hasOptions = card.querySelector('.mp-options-grid');
      if (flipBtn) {
        flipBtn.style.display = hasOptions ? 'none' : 'inline-flex';
        flipBtn.textContent = 'Vend kort 🔄';
      }

      if (index === 0) {
        card.classList.add('is-active');
        card.style.display = 'block';
      } else {
        card.classList.remove('is-active');
        card.style.display = 'none';
      }
    });

    saveData(store);

    completeBox.style.display = 'none';
    mainStack.style.display = 'block';
    updateDeckBadges();
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
      mainStack.style.display = 'none';
      const completeBox = container.querySelector('.mp-stack-complete');
      if (completeBox) {
        completeBox.style.display = 'block';
        renderCompleteBoxUI(container, completeBox);
      }
    }
  }

  // Scanner status ved page-load og springer direkte til første ubesvarede kort
  function resumeDeckProgress(container, store) {
    const mainStack = container.querySelector('.mp-card-stack');
    if (!mainStack) return;

    const cards = Array.from(mainStack.children).filter(child => child.classList.contains('mp-card-wrapper'));
    if (cards.length === 0) return;

    let firstUnanswered = null;

    cards.forEach(card => {
      const cardId = card.dataset.id;
      const isAnswered = store[cardId] && (store[cardId].answered === true || store[cardId].reps > 0);

      if (isAnswered) {
        card.dataset.answered = 'true';
        if (store[cardId].mcCorrect !== undefined) {
          card.dataset.mcCorrect = String(store[cardId].mcCorrect);
        }
        card.classList.remove('is-active', 'flipped');
        card.style.display = 'none';
      } else if (!firstUnanswered) {
        firstUnanswered = card;
      } else {
        card.classList.remove('is-active', 'flipped');
        card.style.display = 'none';
      }
    });

    if (firstUnanswered) {
      firstUnanswered.classList.add('is-active');
      firstUnanswered.style.display = 'block';
      mainStack.style.display = 'block';
    } else {
      mainStack.style.display = 'none';
      const completeBox = container.querySelector('.mp-stack-complete');
      if (completeBox) {
        completeBox.style.display = 'block';
        renderCompleteBoxUI(container, completeBox);
      }
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

    // Gem baseline-data i hukommelsen
    if (!memoryStore[id]) {
      memoryStore[id] = { id, ease: 2.5, reps: 0, interval: 0, nextReview: new Date().toISOString() };
    }
    if (frontContent && backContent) {
      memoryStore[id].front = frontContent.innerHTML;
      memoryStore[id].back = backContent.innerHTML;
      memoryStore[id].url = url;
      memoryStore[id].title = title;
    }

    // 1. Vend kort knap (forside -> bagside)
    const flipBtn = wrapper.querySelector('.mp-btn-flip');
    if (flipBtn) {
      flipBtn.onclick = (e) => {
        e.preventDefault();
        wrapper.classList.add('flipped');
      };
    }

    // 1b. Se spørgsmål knap (bagside -> forside)
    const flipBackBtn = wrapper.querySelector('.mp-btn-flip-back');
    if (flipBackBtn) {
      flipBackBtn.onclick = (e) => {
        e.preventDefault();
        wrapper.classList.remove('flipped');
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

      // Bland altid mulighederne (også ved 2 valg som Sandt/Falsk)
      if (btns.length > 1) {
        for (let i = btns.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          grid.appendChild(btns[j]);
        }
      }

      Array.from(grid.children).forEach((btn, idx) => {
        const letterSpan = btn.querySelector('.mp-option-letter');
        if (letterSpan) {
          letterSpan.textContent = btns.length > 2 ? (letters[idx] || '') : '';
        }

        btn.onclick = (e) => {
          e.preventDefault();
          const isCorrect = btn.dataset.correct === 'true';
          wrapper.dataset.mcAnswered = 'true';
          wrapper.dataset.mcCorrect = isCorrect ? 'true' : 'false';

          const store = getStoredData();
          if (store[id]) {
            store[id].mcCorrect = isCorrect;
            saveData(store);
          }

          const resultBadge = wrapper.querySelector('.mp-user-result-badge');
          if (resultBadge) {
            resultBadge.textContent = isCorrect ? "Korrekt! 🎉" : "Forkert ❌";
            resultBadge.className = `mp-user-result-badge ${isCorrect ? 'correct' : 'wrong'}`;
          }

          // Vis vend-knappen på forsiden med teksten "Se svar ➔"
          if (flipBtn) {
            flipBtn.style.display = 'inline-flex';
            flipBtn.textContent = 'Se svar ➔';
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
        currentStore[id] = { 
          ...currentStore[id], 
          ...updatedStats, 
          answered: true,
          mcCorrect: wrapper.dataset.mcCorrect === 'true'
        };
        saveData(currentStore);

        wrapper.dataset.answered = 'true';
        updateDeckBadges();

        const isInBottom = wrapper.closest('#mp-bottom-stack');

        if (rating === 'hard') {
          if (!isInBottom) {
            const stackData = getBottomStack();
            if (stackData) {
              advanceMainStack(container, wrapper);
              wrapper.classList.remove('flipped', 'is-active');
              stackData.cardStack.appendChild(wrapper);
              refreshBottomStack();
            } else {
              const mainStack = container.querySelector('.mp-card-stack');
              const cards = Array.from(mainStack.children).filter(child => child.classList.contains('mp-card-wrapper'));
              const currentIndex = cards.indexOf(wrapper);
              const nextWrapper = cards[currentIndex + 1];

              wrapper.classList.remove('flipped');

              if (nextWrapper) {
                wrapper.classList.remove('is-active');
                wrapper.style.display = 'none';
                mainStack.appendChild(wrapper);

                nextWrapper.classList.add('is-active');
                nextWrapper.style.display = 'block';
              } else {
                wrapper.classList.add('is-active');
                wrapper.style.display = 'block';
              }
            }
          } else {
            wrapper.classList.remove('flipped');
            wrapper.parentElement.appendChild(wrapper);
            refreshBottomStack();
          }
        } else {
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

  // Opdaterer live fremskridt på dæk-knapperne
  function updateDeckBadges() {
    const store = getStoredData();

    document.querySelectorAll('[data-deck-badge]').forEach(badge => {
      const deckId = badge.dataset.deckBadge;
      const panel = document.getElementById('quiz-' + deckId);
      if (!panel) return;

      const cards = panel.querySelectorAll('.mp-card-wrapper');
      const totalEl = badge.querySelector('.mp-total-count');
      const totalCount = totalEl ? (parseInt(totalEl.textContent, 10) || cards.length) : cards.length;
      let completedCount = 0;

      cards.forEach(card => {
        const cardId = card.dataset.id;
        const cardData = store[cardId];
        if (card.dataset.answered === 'true' || (cardData && (cardData.answered === true || cardData.reps > 0))) {
          completedCount++;
        }
      });

      const doneEl = badge.querySelector('.mp-done-count');
      if (doneEl) {
        doneEl.textContent = completedCount;
      }

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

  // Initialisering
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

      resumeDeckProgress(container, memoryStore);
    });

    saveData(memoryStore);
    updateDeckBadges();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlashcards);
  } else {
    initFlashcards();
  }
})();