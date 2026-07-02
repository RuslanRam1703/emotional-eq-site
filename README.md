# START EQ

A UX/UI product concept for an emotion-driven movie discovery experience built as a feature extension for the START streaming platform.

Instead of browsing a traditional catalog, users begin by expressing how they feel. They can either choose one of eight emotional presets or fine-tune their mood using a five-axis Emotional Equalizer. Based on these inputs, the system generates a personalized recommendation feed and explains why each title matches the selected emotional profile.

This project is **not** a redesign of START. It explores how an emotion-first discovery flow can reduce decision fatigue while preserving the familiar streaming experience.

Primary user flow:

**Onboarding → Presets → Emotional EQ (optional) → Results → Movie Card**

---

# Project Principles

The following principles define the project and should remain consistent throughout its development.

- Emotion-first discovery instead of genre-first navigation.
- Existing START interaction patterns are preserved whenever possible.
- Emotional EQ is the core product feature.
- Results intentionally resemble a familiar streaming catalog.
- Movie Card extends the viewing experience instead of replacing it.
- The interface follows a premium glassmorphism design system.
- Components should be reused rather than recreated.
- New visual concepts should only be introduced when they solve a real UX or product problem.

---

# Current Scope

The current implementation focuses on validating interaction design and visual consistency rather than production functionality.

Implemented screens:

- ✅ Onboarding
- ✅ Emotional Presets
- ✅ Emotional Equalizer
- ✅ Results
- ✅ Movie Card

Current implementation:

- Static frontend
- Mock movie data
- No backend
- No authentication
- No recommendation engine
- No API integration

---

# Technologies

Static frontend with no build step and no framework.

- HTML5 (semantic)
- CSS3
  - Design Tokens
  - Base Styles
  - Components
  - Animations
- Vanilla JavaScript (ES6 Modules)

Application state is stored inside a single in-memory state object (`scripts/state.js`) using a lightweight subscribe/render pattern.

Movie data currently consists of mock objects defined inside the application.

---

# Folder Structure

```text
index.html
    Application entry point

styles/
    tokens.css
        Design tokens (colors, typography, spacing, radius)

    base.css
        Global reset, layout and screen transitions

    components.css
        UI components

    animations.css
        Reserved for future motion work

scripts/
    app.js
        Application entry point

    state.js
        Single source of truth

    router.js
        Screen routing

data/
    mock-films.js
        Reserved data layer

assets/
    Fonts, icons, images (currently empty)

docs/
    Project documentation
    UX notes
    Design decisions
    Iteration prompts
```

---

# Local Development

No build process is required.

Start any static file server from the project root.

### Python

```bash
python -m http.server 5173
```

### Node.js

```bash
npx http-server -p 5173
```

Then open:

```
http://localhost:5173/
```

Opening `index.html` directly is possible, but serving the project over HTTP is recommended because ES Modules may be restricted under the `file://` protocol.

---

# GitHub Pages

The project is a plain static website.

Deployment steps:

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose:

```
Branch: main
Folder: / (root)
```

5. Save.

GitHub Pages will publish the project automatically.

A `.nojekyll` file is included to disable Jekyll processing.

All assets use relative paths, making the project compatible with both custom domains and GitHub Pages project sites.

---

# Documentation

Project documentation is located inside the `docs/` directory.

Recommended documents:

```text
docs/

Project_Context.md
Design_System.md
Components.md
Decision_Log.md
UX_Flow.md
Behance_Plan.md
```

`Project_Context.md` is considered the primary reference document describing the product vision, user flow and overall design direction.

---

# Design Goals

The project aims to demonstrate:

- Product thinking
- UX architecture
- Design system development
- Component-driven interface design
- Information hierarchy
- Interaction design
- Visual consistency

The interface is intended to feel calm, cinematic and premium while remaining practical and easy to use.

---

# Future Work

Planned improvements include:

- Interactive prototype
- Advanced component states
- Motion system
- Real recommendation logic
- Backend integration
- User profiles
- Persistence
- Behance case study

---

# License

This repository is a personal portfolio project created for educational and presentation purposes.

START trademarks, branding and referenced content remain the property of their respective owners.

The Emotional EQ concept and original UX/UI implementation are created solely as a design exploration and are not affiliated with or endorsed by START.
