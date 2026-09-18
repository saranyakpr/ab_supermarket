// Thin wrapper around localStorage so it can be swapped for a real backend
// (or fail silently in private-browsing / SSR contexts) without touching callers.
export const loadFromStorage = (key, fallback) => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const saveToStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore write failures (quota exceeded, private mode, etc.)
  }
};
