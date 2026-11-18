(function () {
  const RUNS_KEY = 'motionsplan_quiz_progress_v8';
  const OPT_OUT_KEY = 'motionsplan_disable_flashcards';

  function getAllDeckRuns() {
    try { return JSON.parse(localStorage.getItem(RUNS_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function getDeckRun(deckId) {
    const runs = getAllDeckRuns();
    return runs[deckId] || { answered: {}, isCompleted: false };
  }

  function saveDeckRun(deckId, runData) {
    try {
      const runs = getAllDeckRuns();
      runs[deckId] = runData;
      localStorage.setItem(RUNS_KEY, JSON.stringify(runs));
    } catch (e) {}
  }

  function getDeckId(container) {
    const panel = container.closest('.mp-quiz-panel');
    if (panel && panel.id) {
      return panel.id.replace('quiz-', '');
    }
    return 'single-deck';
  }

  // Slutkort med fremdriftsbar og knapper i hvert hjørne
  function renderCompleteBoxUI(container, completeBox, deckRun) {
    const allCards = Array.from(container.querySelectorAll('.mp-card-wrapper'));
    const mcCards = allCards.filter(c => c.querySelector('.mp-options-grid'));
    
    const dynamicContainer = completeBox.querySelector('.mp-complete-dynamic-content');
    if (dynamicContainer) dynamicContainer.innerHTML = '';

    const totalMc = mcCards.length;
    let correctCount = 0;
    let actualSkippedCount = 0;
    let needsReviewCards = [];

    allCards.forEach(c => {
      const cId = c.dataset.id;
      const ansInfo = deckRun.answered[cId];
      const hasMc = !!c.querySelector('.mp-options-grid');

      if (!ansInfo || ansInfo.skipped) {
        // Reelt skippet eller aldrig nået
        actualSkippedCount++;
        needsReviewCards.push(c);
      } else {
        if (hasMc && ansInfo.mcCorrect === true) {
          correctCount++;
        }

        // Skal gentages hvis: 1) markeret svær, eller 2) forkert MC-svar
        const isHard = ansInfo.rating === 'hard';
        const isWrongMc = hasMc && ansInfo.mcCorrect === false;

        if (isHard || isWrongMc) {
          needsReviewCards.push(c);
        }
      }
    });

    const needsReviewCount = needsReviewCards.length;

    if (dynamicContainer) {
      if (totalMc > 0) {
        const pct = Math.round((correctCount / totalMc) * 100);
        const barColor = pct >= 60 ? '#10b981' : (pct >= 40 ? '#f59e0b' : '#ef4444');

        dynamicContainer.innerHTML = `
          <div class="mp-score-display">
            <div class="mp-score-headline">
              <span class="mp-score-correct">${correctCount}</span> af ${totalMc} rigtige
              <span class="mp-score-pct">(${pct}%)</span>
            </div>
            <div class="mp-progress-bar-track">
              <div class="mp-progress-bar-fill" style="width: ${pct}%; background: ${barColor};"></div>
            </div>
          </div>
        `;
      } else {
        dynamicContainer.innerHTML = `
          <div class="mp-score-display">
            <div class="mp-score-headline">
              <span class="mp-score-correct">✓ Alle ${allCards.length} kort</span> gennemgået
            </div>
            <div class="mp-progress-bar-track">
              <div class="mp-progress-bar-fill" style="width: 100%; background: #10b981;"></div>
            </div>
          </div>
        `;
      }
    }

    // Knapper i bunden
    const leftContainer = completeBox.querySelector('.mp-complete-bottom-left');
    const rightContainer = completeBox.querySelector('.mp-complete-bottom-right');

    if (leftContainer) {
      leftContainer.innerHTML = '';

      if (needsReviewCount > 0) {
        // Viser KUN "ubesvarede", hvis samtlige kort i puljen reelt var skippede
        const isOnlySkipped = (actualSkippedCount === needsReviewCount);
        const btnLabel = isOnlySkipped 
          ? `🔁 Prøv ubesvarede (${needsReviewCount})` 
          : `🔁 Gentag svære/forkerte (${needsReviewCount})`;

        const repeatHardBtn = document.createElement('button');
        repeatHardBtn.type = 'button';
        repeatHardBtn.className = 'mp-btn-text-subtle mp-btn-repeat-hard';
        repeatHardBtn.innerHTML = btnLabel;
        repeatHardBtn.onclick = () => restartDeck(container, completeBox, true);
        leftContainer.appendChild(repeatHardBtn);
      } else if (totalMc > 0 && correctCount === totalMc) {
        leftContainer.innerHTML = `<span style="font-size:0.84rem; font-weight:700; color:#15803d;">✓ Alle besvaret fejlfrit!</span>`;
      } else if (totalMc === 0) {
        leftContainer.innerHTML = `<span style="font-size:0.84rem; font-weight:700; color:#15803d;">✓ Alle gennemført!</span>`;
      }
    }

    if (rightContainer) {
      rightContainer.innerHTML = '';
      const restartBtn = document.createElement('button');
      restartBtn.type = 'button';
      restartBtn.className = 'mp-btn-text-subtle mp-btn-restart-subtle';
      restartBtn.innerHTML = '🔄 Start forfra';
      restartBtn.onclick = () => restartDeck(container, completeBox, false);
      rightContainer.appendChild(restartBtn);
    }
  }

  // Genstart dækket (enten hele modulet eller kun svære/forkerte kort)
  function restartDeck(container, completeBox, onlyHard = false) {
    const deckId = getDeckId(container);
    const deckRun = getDeckRun(deckId);
    const mainStack = container.querySelector('.mp-card-stack');
    const cards = Array.from(mainStack.children).filter(child => child.classList.contains('mp-card-wrapper'));

    let activeSubset = [];

    if (onlyHard) {
      activeSubset = cards.filter(card => {
        const ans = deckRun.answered[card.dataset.id];
        const hasMc = !!card.querySelector('.mp-options-grid');
        return !ans || ans.skipped || ans.rating === 'hard' || (hasMc && ans.mcCorrect === false);
      });
      activeSubset.forEach(c => delete deckRun.answered[c.dataset.id]);
      deckRun.isCompleted = false;
      saveDeckRun(deckId, deckRun);
    } else {
      activeSubset = cards;
      saveDeckRun(deckId, { answered: {}, isCompleted: false });
    }

    cards.forEach(card => {
      const isTarget = activeSubset.includes(card);
      card.classList.remove('flipped');

      const badge = card.querySelector('.mp-user-result-badge');
      if (badge) {
        badge.textContent = '';
        badge.className = 'mp-user-result-badge';
      }

      const flipBtn = card.querySelector('.mp-btn-flip');
      const hasOptions = card.querySelector('.mp-options-grid');
      if (flipBtn) {
        flipBtn.style.display = hasOptions ? 'none' : 'inline-flex';
        flipBtn.textContent = 'Vend kort 🔄';
      }

      if (isTarget) {
        delete card.dataset.answered;
        delete card.dataset.mcAnswered;
        delete card.dataset.mcCorrect;
      } else {
        // Bevar answered-markør på kort, der ikke skal gentages
        card.dataset.answered = 'true';
      }

      card.classList.remove('is-active');
      card.style.display = 'none';
    });

    if (activeSubset.length > 0) {
      activeSubset[0].classList.add('is-active');
      activeSubset[0].style.display = 'block';
    }

    completeBox.style.display = 'none';
    mainStack.style.display = 'block';

    updateDeckBadges();
  }

  function advanceMainStack(container, currentWrapper) {
    const mainStack = container.querySelector('.mp-card-stack');
    if (!mainStack) return;

    const allCards = Array.from(mainStack.children).filter(child => child.classList.contains('mp-card-wrapper'));
    const currentIndex = allCards.indexOf(currentWrapper);

    let nextWrapper = null;
    for (let i = currentIndex + 1; i < allCards.length; i++) {
      if (allCards[i].dataset.answered !== 'true') {
        nextWrapper = allCards[i];
        break;
      }
    }

    currentWrapper.classList.remove('is-active', 'flipped');
    currentWrapper.style.display = 'none';

    if (nextWrapper) {
      nextWrapper.classList.add('is-active');
      nextWrapper.style.display = 'block';
    } else {
      const deckId = getDeckId(container);
      const deckRun = getDeckRun(deckId);
      deckRun.isCompleted = true;
      saveDeckRun(deckId, deckRun);

      mainStack.style.display = 'none';
      const completeBox = container.querySelector('.mp-stack-complete');
      if (completeBox) {
        completeBox.style.display = 'flex';
        renderCompleteBoxUI(container, completeBox, deckRun);
      }
      updateDeckBadges();
    }
  }

  function resumeDeckProgress(container) {
    const deckId = getDeckId(container);
    const deckRun = getDeckRun(deckId);
    const mainStack = container.querySelector('.mp-card-stack');
    if (!mainStack) return;

    const cards = Array.from(mainStack.children).filter(child => child.classList.contains('mp-card-wrapper'));
    if (cards.length === 0) return;

    if (deckRun.isCompleted) {
      mainStack.style.display = 'none';
      const completeBox = container.querySelector('.mp-stack-complete');
      if (completeBox) {
        completeBox.style.display = 'flex';
        renderCompleteBoxUI(container, completeBox, deckRun);
      }
      return;
    }

    let firstUnanswered = null;

    cards.forEach(card => {
      const cardId = card.dataset.id;
      const ansInfo = deckRun.answered[cardId];

      if (ansInfo) {
        card.dataset.answered = 'true';
        card.dataset.mcCorrect = String(ansInfo.mcCorrect);
        card.classList.remove('is-active', 'flipped');
        card.style.display = 'none';
      } else if (!firstUnanswered) {
        firstUnanswered = card;
        card.classList.add('is-active');
        card.style.display = 'block';
      } else {
        card.classList.remove('is-active', 'flipped');
        card.style.display = 'none';
      }
    });

    if (!firstUnanswered) {
      mainStack.style.display = 'none';
      const completeBox = container.querySelector('.mp-stack-complete');
      if (completeBox) {
        completeBox.style.display = 'flex';
        renderCompleteBoxUI(container, completeBox, deckRun);
      }
    }
  }

  function setupCardEvents(container, wrapper, srsEngine) {
    if (wrapper.dataset.initialized === 'true') return;
    wrapper.dataset.initialized = 'true';

    const id = wrapper.dataset.id;
    const url = wrapper.dataset.url;
    const title = wrapper.dataset.title;
    const frontContent = wrapper.querySelector('.mp-card-front .mp-card-content');
    const backContent = wrapper.querySelector('.mp-card-back .mp-card-content');
    const questionTextEl = wrapper.querySelector('.mp-question-text');
    const answerTextEl = wrapper.querySelector('.mp-answer-text');

    if (questionTextEl && srsEngine) {
      const clozeData = srsEngine.parseAnkiCloze(questionTextEl.innerHTML);
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

    if (srsEngine) {
      let memoryStore = srsEngine.getStoredData();
      if (!memoryStore[id]) {
        memoryStore[id] = { id, ease: 2.5, reps: 0, interval: 0, nextReview: new Date().toISOString() };
      }
      if (frontContent && backContent) {
        memoryStore[id].front = frontContent.innerHTML;
        memoryStore[id].back = backContent.innerHTML;
        memoryStore[id].url = url;
        memoryStore[id].title = title;
      }
      srsEngine.saveData(memoryStore);
    }

    const flipBtn = wrapper.querySelector('.mp-btn-flip');
    if (flipBtn) {
      flipBtn.onclick = (e) => {
        e.preventDefault();
        wrapper.classList.add('flipped');
      };
    }

    const flipBackBtn = wrapper.querySelector('.mp-btn-flip-back');
    if (flipBackBtn) {
      flipBackBtn.onclick = (e) => {
        e.preventDefault();
        wrapper.classList.remove('flipped');
      };
    }

    wrapper.querySelectorAll('.mp-btn-skip').forEach(skipBtn => {
      skipBtn.onclick = (e) => {
        e.preventDefault();
        wrapper.dataset.answered = 'true';
        
        const deckId = getDeckId(container);
        const deckRun = getDeckRun(deckId);
        deckRun.answered[id] = { skipped: true, mcCorrect: null, rating: null };
        saveDeckRun(deckId, deckRun);

        advanceMainStack(container, wrapper);
        updateDeckBadges();
      };
    });

    const grid = wrapper.querySelector('.mp-options-grid');
    if (grid) {
      const btns = Array.from(grid.children);
      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

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

          const resultBadge = wrapper.querySelector('.mp-user-result-badge');
          if (resultBadge) {
            resultBadge.textContent = isCorrect ? "Korrekt! 🎉" : "Forkert ❌";
            resultBadge.className = `mp-user-result-badge ${isCorrect ? 'correct' : 'wrong'}`;
          }

          if (flipBtn) {
            flipBtn.style.display = 'inline-flex';
            flipBtn.textContent = 'Se svar ➔';
          }

          wrapper.classList.add('flipped');
        };
      });
    }

    wrapper.querySelectorAll('[data-rating]').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const rating = btn.dataset.rating;

        if (srsEngine) {
          const currentStore = srsEngine.getStoredData();
          const updatedStats = srsEngine.calculateSM2(currentStore[id] || { ease: 2.5, reps: 0, interval: 0 }, rating);
          currentStore[id] = { ...currentStore[id], ...updatedStats };
          srsEngine.saveData(currentStore);
        }

        const hasMc = !!wrapper.querySelector('.mp-options-grid');
        const isMcAnswered = wrapper.dataset.mcAnswered === 'true';
        // Kun true/false hvis der rent faktisk var et MC-spørgsmål, ellers null
        const mcCorrectVal = hasMc ? (isMcAnswered && wrapper.dataset.mcCorrect === 'true') : null;

        const deckId = getDeckId(container);
        const deckRun = getDeckRun(deckId);
        deckRun.answered[id] = {
          rating: rating,
          mcCorrect: mcCorrectVal,
          skipped: false
        };
        saveDeckRun(deckId, deckRun);

        wrapper.dataset.answered = 'true';
        updateDeckBadges();

        advanceMainStack(container, wrapper);
      };
    });
  }

  function updateDeckBadges() {
    document.querySelectorAll('[data-deck-badge]').forEach(badge => {
      const deckId = badge.dataset.deckBadge;
      const panel = document.getElementById('quiz-' + deckId);
      if (!panel) return;

      const cards = panel.querySelectorAll('.mp-card-wrapper');
      const totalEl = badge.querySelector('.mp-total-count');
      const totalCount = totalEl ? (parseInt(totalEl.textContent, 10) || cards.length) : cards.length;

      const deckRun = getDeckRun(deckId);
      const completedCount = Object.keys(deckRun.answered).length;

      const doneEl = badge.querySelector('.mp-done-count');
      if (doneEl) {
        doneEl.textContent = completedCount;
      }

      const parentBtn = badge.closest('.mp-cat-btn');
      if (parentBtn) {
        if (deckRun.isCompleted || (completedCount >= totalCount && totalCount > 0)) {
          parentBtn.classList.add('is-completed');
        } else {
          parentBtn.classList.remove('is-completed');
        }
      }
    });
  }

  function initFlashcards() {
    if (localStorage.getItem(OPT_OUT_KEY) === 'true') {
      document.querySelectorAll('.mp-flashcard-stack-container').forEach(el => el.style.display = 'none');
      return;
    }

    const srsEngine = window.MPSRS;
    if (!srsEngine) {
      console.warn("MPSRS Engine ikke indlæst. Spaced Repetition logik deaktiveret.");
    }

    document.querySelectorAll('.mp-flashcard-stack-container').forEach(container => {
      container.querySelectorAll('.mp-card-wrapper').forEach(wrapper => {
        setupCardEvents(container, wrapper, srsEngine);
      });
      resumeDeckProgress(container);
    });

    updateDeckBadges();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlashcards);
  } else {
    setTimeout(initFlashcards, 50);
  }
})();