// router.js
// Deterministic, stack-based screen navigation.
// No SPA framework — each screen is a section toggled via a class.
//
// state.screenHistory is the single source of truth for "where has the
// user been" — currentScreen always equals its last entry. goToScreen
// pushes, goBack pops. Both are called ONLY from click/keydown listeners
// in app.js — never from render/subscription code — so every transition
// is traceable to one explicit user action.

export const SCREENS = ["landing", "onboarding", "presets", "eq", "results", "card"];

export function renderScreen(state) {
  SCREENS.forEach((screenName) => {
    const el = document.querySelector(`[data-screen="${screenName}"]`);
    if (!el) return;
    el.classList.toggle("active", screenName === state.currentScreen);
  });
}

// Returns the next history stack for pushing screenName — exposed so
// call sites that must batch a data update with the navigation into one
// setState (e.g. selecting a movie) can still keep the stack consistent.
export function pushHistory(state, screenName) {
  return [...state.screenHistory, screenName];
}

export function goToScreen(getState, setState, screenName) {
  if (!SCREENS.includes(screenName)) return;
  const state = getState();
  setState({ currentScreen: screenName, screenHistory: pushHistory(state, screenName) });
}

export function goBack(getState, setState) {
  const state = getState();
  if (state.screenHistory.length <= 1) return;
  const history = state.screenHistory.slice(0, -1);
  setState({ currentScreen: history[history.length - 1], screenHistory: history });
}
