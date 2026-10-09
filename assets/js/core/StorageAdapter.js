// assets/js/core/StorageAdapter.js

const DRAFT_PREFIX = 'mp_draft_';
const LOG_PREFIX = 'mp_log_';
const PROFILE_KEY = 'mp_user_profile';

export const StorageAdapter = {
  // --- 1. DRAFT MANAGEMENT (Formulartilstand / Udkast) ---
  saveDraft(testId, draftData) {
    try {
      localStorage.setItem(`${DRAFT_PREFIX}${testId}`, JSON.stringify(draftData));
    } catch (e) {
      console.warn('Kunne ikke gemme draft:', e);
    }
  },

  loadDraft(testId) {
    try {
      const item = localStorage.getItem(`${DRAFT_PREFIX}${testId}`);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      return null;
    }
  },

  clearDraft(testId) {
    localStorage.removeItem(`${DRAFT_PREFIX}${testId}`);
  },

  // --- 2. LOG MANAGEMENT (Universel Testresultat-historik) ---
  getLog(testId) {
    try {
      const item = localStorage.getItem(`${LOG_PREFIX}${testId}`);
      if (!item) return { testId, version: "2.0", updatedAt: new Date().toISOString(), history: [] };
      return JSON.parse(item);
    } catch (e) {
      return { testId, version: "2.0", updatedAt: new Date().toISOString(), history: [] };
    }
  },

  getLatest(testId) {
    const log = this.getLog(testId);
    return (log.history && log.history.length > 0) ? log.history[0] : null;
  },

  commitToLog(testId, recordData) {
    try {
      const currentLog = this.getLog(testId);
      const now = new Date().toISOString();

      const newEntry = {
        id: `res_${Date.now()}`,
        timestamp: now,
        type: recordData.type || 'physical',
        primary: recordData.primary || { value: 0, unit: '', label: 'Resultat' },
        ...(recordData.norm && { norm: recordData.norm }),
        ...(recordData.subMetrics && { subMetrics: recordData.subMetrics }),
        ...(recordData.answers && { answers: recordData.answers }),
        ...(recordData.context && { context: recordData.context })
      };

      currentLog.updatedAt = now;
      currentLog.history.unshift(newEntry); // Nyeste måling lægges øverst

      localStorage.setItem(`${LOG_PREFIX}${testId}`, JSON.stringify(currentLog));
      return newEntry;
    } catch (e) {
      console.error('Fejl ved gemning af testresultat:', e);
      return null;
    }
  },

  deleteLogEntry(testId, entryId) {
    const currentLog = this.getLog(testId);
    currentLog.history = currentLog.history.filter(item => item.id !== entryId);
    currentLog.updatedAt = new Date().toISOString();
    localStorage.setItem(`${LOG_PREFIX}${testId}`, JSON.stringify(currentLog));
  },

  clearLog(testId) {
    localStorage.removeItem(`${LOG_PREFIX}${testId}`);
  },

  // --- 3. DELT BRUGERPROFIL (Stamdata på tværs af beregnere) ---
  saveProfile(profileData) {
    const current = this.getProfile();
    localStorage.setItem(PROFILE_KEY, JSON.stringify({ ...current, ...profileData }));
  },

  getProfile() {
    try {
      const item = localStorage.getItem(PROFILE_KEY);
      return item ? JSON.parse(item) : { age: 30, gender: 'male', weight: 75, height: 175 };
    } catch(e) {
      return { age: 30, gender: 'male', weight: 75, height: 175 };
    }
  }
};