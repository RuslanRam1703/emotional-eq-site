// app.js
// App entry point: connects state, router, and the navigation flow.
// Per docs/02_UX_BRIEF.md section 3/9, Presets branches: apply a preset to
// jump straight to Results (main scenario), or customize to open EQ first
// (alternative scenario). Every other screen has exactly one forward step,
// captured in NAV_FLOW; Presets' two explicit actions are wired directly
// in initPresets() instead, since a single "next" doesn't apply to it.

import { getState, setState, subscribeToState, EQ_DEFAULTS } from "./state.js";
import { renderScreen, goToScreen, goBack, pushHistory } from "./router.js";

const NAV_FLOW = {
  landing: "onboarding",
  onboarding: "presets",
  eq: "results",
  results: "card",
  card: null,
};

const EQ_ACCENT_VARS = {
  calm: "--color-emotion-calm",
  energy: "--color-emotion-energy",
  romance: "--color-emotion-romantic",
  tension: "--color-emotion-anxiety",
  focus: "--color-emotion-focused",
};

// Poster system (productization-posters.md): gradient params per emotion,
// shared by every poster surface (Results cards + Movie Card hero) so the
// cinematic color mapping stays consistent across screens.
const POSTER_STYLES = {
  calm: { angle: 155, from: "#12224a", to: "#4f7fd6" },
  energy: { angle: 155, from: "#7a2b0f", to: "#e08a3c" },
  romance: { angle: 155, from: "#4a1730", to: "#d9709f" },
  tension: { angle: 155, from: "#2a0f22", to: "#7a1f3a" },
  focus: { angle: 155, from: "#08302c", to: "#2fd0c0" },
};

function buildPosterGradient(posterStyle) {
  const style = posterStyle || POSTER_STYLES.calm;
  return `linear-gradient(${style.angle}deg, ${style.from} 0%, ${style.to} 100%)`;
}

// Mock recommendation dataset. Each movie is tagged with the eqValues
// axis it best represents (calm/energy/romance/tension/focus per
// docs/04_TECH_REQUIREMENTS.md mood mapping in iteration-04-results.md).
const MOCK_MOVIES = [
  {
    id: "quiet-mornings",
    title: "Quiet Mornings",
    genre: "Drama",
    mood: "calm",
    posterStyle: POSTER_STYLES.calm,
    duration: 98,
    rating: 7.6,
    synopsis: "A retired teacher rediscovers the small rituals that make life bearable.",
  },
  {
    id: "the-long-afternoon",
    title: "The Long Afternoon",
    genre: "Slow Cinema",
    mood: "calm",
    posterStyle: POSTER_STYLES.calm,
    duration: 104,
    rating: 7.2,
    synopsis: "Two strangers share a slow, wordless afternoon by the sea.",
  },
  {
    id: "redline",
    title: "Redline",
    genre: "Action",
    mood: "energy",
    posterStyle: POSTER_STYLES.energy,
    duration: 101,
    rating: 7.4,
    synopsis: "A getaway driver has one night to outrun a debt he can't repay.",
  },
  {
    id: "breakpoint",
    title: "Breakpoint",
    genre: "Thriller",
    mood: "energy",
    posterStyle: POSTER_STYLES.energy,
    duration: 112,
    rating: 7.7,
    synopsis: "A hacker races against a countdown to stop a citywide blackout.",
  },
  {
    id: "paper-hearts",
    title: "Paper Hearts",
    genre: "Romance",
    mood: "romance",
    posterStyle: POSTER_STYLES.romance,
    duration: 96,
    rating: 7.5,
    synopsis: "Old love letters resurface and rewrite two people's present.",
  },
  {
    id: "two-streets-over",
    title: "Two Streets Over",
    genre: "Romance",
    mood: "romance",
    posterStyle: POSTER_STYLES.romance,
    duration: 92,
    rating: 7.1,
    synopsis: "A chance encounter turns into a quiet, unfolding romance.",
  },
  {
    id: "the-silent-floor",
    title: "The Silent Floor",
    genre: "Psychological Thriller",
    mood: "tension",
    posterStyle: POSTER_STYLES.tension,
    duration: 108,
    rating: 8.0,
    synopsis: "A night-shift nurse starts hearing footsteps on an empty floor.",
  },
  {
    id: "undertow",
    title: "Undertow",
    genre: "Psychological Thriller",
    mood: "tension",
    posterStyle: POSTER_STYLES.tension,
    duration: 115,
    rating: 7.9,
    synopsis: "A detective is pulled back into a case that never let her go.",
  },
  {
    id: "recursion",
    title: "Recursion",
    genre: "Sci-Fi",
    mood: "focus",
    posterStyle: POSTER_STYLES.focus,
    duration: 121,
    rating: 8.3,
    synopsis: "A programmer discovers a loop in reality only she can see.",
  },
  {
    id: "the-glass-loop",
    title: "The Glass Loop",
    genre: "Sci-Fi",
    mood: "focus",
    posterStyle: POSTER_STYLES.focus,
    duration: 118,
    rating: 8.1,
    synopsis: "Four scientists relive the same day, each remembering less.",
  },
];

// Maps Presets screen labels (state.selectedEmotion) onto the 5 EQ axes,
// so a preset pick can boost the same mood category as the EQ sliders.
const EMOTION_TO_MOOD = {
  calm: "calm",
  energetic: "energy",
  romantic: "romance",
  sad: "calm",
  focused: "focus",
  nostalgic: "calm",
  tense: "tension",
  happy: "energy",
};

const MOOD_REASONS = {
  calm: "Высокий уровень спокойствия делает этот фильм подходящим для расслабленного просмотра",
  energy: "Высокий уровень энергии делает этот фильм подходящим для динамичного, заряжающего просмотра",
  romance: "Высокий уровень романтики делает этот фильм подходящим для тёплого, чувственного вечера",
  tension: "Высокий уровень напряжения делает этот фильм подходящим для захватывающего, тревожного сюжета",
  focus: "Высокий уровень сосредоточенности делает этот фильм подходящим для вдумчивого просмотра",
};

// Movie Card explanation logic (iteration-05): narrative descriptor per
// dominant EQ axis, per docs/04_TECH_REQUIREMENTS.md.
const NARRATIVE_BY_DOMINANT = {
  calm: "спокойное, размеренное повествование",
  energy: "динамичный, стремительный ритм",
  romance: "тонкая эмоциональная близость",
  tension: "психологическое напряжение, которое держит в тонусе",
  focus: "сложная, многослойная структура",
};

function initNavigation() {
  document.querySelectorAll('[data-action="next-screen"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = NAV_FLOW[getState().currentScreen];
      if (next) {
        goToScreen(getState, setState, next);
      }
    });
  });
}

function initLanding() {
  const exploreBtn = document.querySelector('[data-action="explore-presets"]');
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      goToScreen(getState, setState, "presets");
    });
  }
}

function initPresets() {
  const cards = document.querySelectorAll(".emotion-card");
  const applyBtn = document.querySelector('[data-action="apply-preset"]');
  const customizeBtn = document.querySelector('[data-action="customize-eq"]');

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Selecting a preset only records the choice — it must never itself
      // trigger navigation. Only the two explicit buttons below may.
      setState({ selectedEmotion: card.dataset.emotion });
    });
  });

  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      if (applyBtn.disabled) return;
      goToScreen(getState, setState, "results");
    });
  }

  if (customizeBtn) {
    customizeBtn.addEventListener("click", () => {
      if (customizeBtn.disabled) return;
      goToScreen(getState, setState, "eq");
    });
  }
}

function renderPresets(state) {
  if (state.currentScreen !== "presets") return;

  document.querySelectorAll(".emotion-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.emotion === state.selectedEmotion);
  });

  const applyBtn = document.querySelector('[data-action="apply-preset"]');
  const customizeBtn = document.querySelector('[data-action="customize-eq"]');
  if (applyBtn) {
    applyBtn.disabled = !state.selectedEmotion;
  }
  if (customizeBtn) {
    customizeBtn.disabled = !state.selectedEmotion;
  }
}

function isEqDefault(eqValues) {
  return Object.keys(EQ_DEFAULTS).every((key) => eqValues[key] === EQ_DEFAULTS[key]);
}

function getDominantEmotion(eqValues) {
  if (isEqDefault(eqValues)) return null;
  const [dominant] = Object.entries(eqValues).sort((a, b) => b[1] - a[1])[0];
  return dominant;
}

function initEq() {
  document.querySelectorAll(".eq-slider__input").forEach((input) => {
    input.addEventListener("input", () => {
      const emotion = input.dataset.eqInput;
      setState({
        eqValues: { ...getState().eqValues, [emotion]: Number(input.value) },
      });
    });
  });

  const resultsBtn = document.querySelector('[data-action="show-results"]');
  resultsBtn.addEventListener("click", () => {
    const next = NAV_FLOW.eq;
    if (next) {
      goToScreen(getState, setState, next);
    }
  });
}

function renderEq(state) {
  if (state.currentScreen !== "eq") return;

  const { eqValues } = state;

  Object.entries(eqValues).forEach(([emotion, value]) => {
    // Fill grows from the neutral center (50) outward, not from 0 — at
    // value=50 the deviation is 0, so no fill/glow is visible (ui-consistency-check.md).
    const deviation = Math.abs(value - 50);

    const container = document.querySelector(`.eq-slider[data-emotion="${emotion}"]`);
    if (container) {
      container.style.setProperty("--intensity", deviation / 50);
    }

    const input = document.querySelector(`[data-eq-input="${emotion}"]`);
    if (input && Number(input.value) !== value) {
      input.value = value;
    }

    const fill = document.querySelector(`[data-eq-fill="${emotion}"]`);
    if (fill) {
      fill.style.left = `${Math.min(value, 50)}%`;
      fill.style.width = `${deviation}%`;
    }

    const valueLabel = document.querySelector(`[data-eq-value="${emotion}"]`);
    if (valueLabel) {
      valueLabel.textContent = value;
    }
  });

  const summaryEl = document.querySelector("[data-eq-summary]");
  if (summaryEl) {
    const dominant = getDominantEmotion(eqValues);
    summaryEl.textContent = dominant
      ? dominant.charAt(0).toUpperCase() + dominant.slice(1)
      : "Neutral";
    summaryEl.style.color = dominant ? `var(${EQ_ACCENT_VARS[dominant]})` : "";
  }

  const resultsBtn = document.querySelector('[data-action="show-results"]');
  if (resultsBtn) {
    resultsBtn.disabled = isEqDefault(eqValues);
  }
}

function getMovieScore(movie, state) {
  const base = state.eqValues[movie.mood] ?? 50;
  const boost = EMOTION_TO_MOOD[state.selectedEmotion] === movie.mood ? 15 : 0;
  return Math.min(100, base + boost);
}

function getRankedMovies(state) {
  return MOCK_MOVIES.map((movie) => ({ ...movie, score: getMovieScore(movie, state) })).sort(
    (a, b) => b.score - a.score
  );
}

function capitalize(word) {
  return word ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}

function renderResults(state) {
  if (state.currentScreen !== "results") return;

  const grid = document.querySelector("[data-results-grid]");
  if (!grid) return;

  const subtitle = document.querySelector("[data-results-subtitle]");
  if (subtitle) {
    const dominant = getDominantEmotion(state.eqValues);
    const emotionLabel = capitalize(state.selectedEmotion) || "—";
    const dominantLabel = dominant ? capitalize(dominant) : "Neutral";
    subtitle.textContent = `Настроение: ${emotionLabel} · Доминанта EQ: ${dominantLabel}`;
  }

  grid.innerHTML = "";
  getRankedMovies(state).forEach((movie) => {
    const card = document.createElement("article");
    card.className = "movie-card";
    card.dataset.movieId = movie.id;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${movie.title} — открыть карточку фильма`);
    card.style.setProperty("--accent", `var(${EQ_ACCENT_VARS[movie.mood]})`);
    card.style.setProperty("--intensity", movie.score / 100);

    const poster = document.createElement("div");
    poster.className = "movie-card__poster";

    const posterImage = document.createElement("div");
    posterImage.className = "movie-card__poster-image";
    posterImage.style.backgroundImage = buildPosterGradient(movie.posterStyle);

    const posterMark = document.createElement("span");
    posterMark.className = "movie-card__poster-mark";
    posterMark.textContent = movie.title.charAt(0).toUpperCase();

    const match = document.createElement("span");
    match.className = "movie-card__match";
    match.textContent = `${movie.score}% match`;

    poster.append(posterImage, posterMark, match);

    const body = document.createElement("div");
    body.className = "movie-card__body";

    const titleRow = document.createElement("div");
    titleRow.className = "movie-card__title-row";

    const title = document.createElement("h3");
    title.className = "movie-card__title";
    title.textContent = movie.title;

    const rating = document.createElement("span");
    rating.className = "movie-card__rating";
    rating.textContent = `★ ${movie.rating}`;

    titleRow.append(title, rating);

    const tagsRow = document.createElement("div");
    tagsRow.className = "movie-card__tags-row";

    const genre = document.createElement("span");
    genre.className = "movie-card__genre";
    genre.textContent = movie.genre;

    const moodTag = document.createElement("span");
    moodTag.className = "movie-card__mood-tag";
    moodTag.textContent = capitalize(movie.mood);

    tagsRow.append(genre, moodTag);

    const reason = document.createElement("p");
    reason.className = "movie-card__reason";
    reason.textContent = MOOD_REASONS[movie.mood];

    body.append(titleRow, tagsRow, reason);
    card.append(poster, body);
    const openMovie = () => {
      const next = NAV_FLOW.results;
      setState({
        selectedMovie: movie,
        currentScreen: next,
        screenHistory: pushHistory(getState(), next),
      });
    };
    card.addEventListener("click", openMovie);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMovie();
      }
    });

    grid.appendChild(card);
  });
}

function buildReasoning(state, movie) {
  const dominant = getDominantEmotion(state.eqValues) || movie.mood;
  const narrative = NARRATIVE_BY_DOMINANT[dominant] || NARRATIVE_BY_DOMINANT[movie.mood];
  const emotionLabel = capitalize(state.selectedEmotion) || "твоё текущее состояние";
  return `Твоё настроение «${emotionLabel}» и доминанта EQ «${capitalize(dominant)}» подсказывают, что сейчас тебе откликнется ${narrative}. Поэтому мы выбрали именно этот фильм.`;
}

function initMovieDetail() {
  const backBtn = document.querySelector('[data-action="back-to-results"]');
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      goBack(getState, setState);
    });
  }
}

function renderMovieDetail(state) {
  if (state.currentScreen !== "card") return;

  const detailEl = document.querySelector("[data-movie-detail]");
  const backdropEl = document.querySelector("[data-movie-backdrop]");
  const titleEl = document.querySelector("[data-movie-title]");
  const metaEl = document.querySelector("[data-movie-meta]");
  const posterMarkEl = document.querySelector("[data-movie-poster-mark]");
  const synopsisEl = document.querySelector("[data-movie-synopsis]");
  const tagsEl = document.querySelector("[data-movie-tags]");
  const reasoningEl = document.querySelector("[data-movie-reasoning]");
  if (!detailEl) return;

  const movie = state.selectedMovie;

  if (!movie) {
    if (titleEl) titleEl.textContent = "Фильм не выбран";
    if (metaEl) metaEl.textContent = "";
    if (backdropEl) backdropEl.style.backgroundImage = "";
    if (posterMarkEl) posterMarkEl.textContent = "";
    if (synopsisEl) synopsisEl.textContent = "Вернись к подборке и выбери фильм.";
    if (tagsEl) tagsEl.innerHTML = "";
    if (reasoningEl) reasoningEl.textContent = "";
    return;
  }

  detailEl.style.setProperty("--accent", `var(${EQ_ACCENT_VARS[movie.mood]})`);
  if (backdropEl) {
    backdropEl.style.backgroundImage = `linear-gradient(180deg, rgba(10, 10, 12, 0.15) 0%, rgba(10, 10, 12, 0.92) 100%), ${buildPosterGradient(
      movie.posterStyle
    )}`;
  }
  if (titleEl) titleEl.textContent = movie.title;
  if (metaEl) metaEl.textContent = `${movie.genre} · ${movie.duration} мин · ★ ${movie.rating}`;
  if (posterMarkEl) posterMarkEl.textContent = movie.title.charAt(0).toUpperCase();
  if (synopsisEl) synopsisEl.textContent = movie.synopsis;

  if (tagsEl) {
    tagsEl.innerHTML = "";
    const chip = document.createElement("span");
    chip.className = "movie-detail__tag";
    chip.textContent = capitalize(movie.mood);
    tagsEl.appendChild(chip);
  }

  if (reasoningEl) {
    reasoningEl.textContent = buildReasoning(state, movie);
  }
}

function render(state) {
  renderScreen(state);
  renderPresets(state);
  renderEq(state);
  renderResults(state);
  renderMovieDetail(state);
}

function init() {
  subscribeToState(render);
  render(getState());
  initNavigation();
  initLanding();
  initPresets();
  initEq();
  initMovieDetail();
}

document.addEventListener("DOMContentLoaded", init);
