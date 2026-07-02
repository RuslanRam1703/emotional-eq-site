// state.js
// Single source of truth for the Emotional EQ app.
// Per docs/04_TECH_REQUIREMENTS.md: state changes must trigger UI updates,
// no duplicated state in the DOM.

export const EQ_DEFAULTS = {
  calm: 50,
  energy: 50,
  romance: 50,
  tension: 50,
  focus: 50,
};

const state = {
  currentScreen: "landing",
  screenHistory: ["landing"],
  selectedEmotion: "",
  eqValues: { ...EQ_DEFAULTS },
  selectedMovie: null,
};

const listeners = [];

export function getState() {
  return state;
}

export function setState(partial) {
  Object.assign(state, partial);
  listeners.forEach((listener) => listener(state));
}

export function subscribeToState(listener) {
  listeners.push(listener);
}
