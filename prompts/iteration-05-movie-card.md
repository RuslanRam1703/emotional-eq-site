1\. CONTEXT



You are working on Emotional EQ.



Previous iterations:



01: App shell

02: Presets interaction

03: Emotional EQ system

04: Results recommendation system



Now we build the final decision layer: Movie Card screen.



This is where the user makes the final choice.



2\. GOAL



Create a Movie Card screen that:



shows full movie details

explains why the movie was recommended

connects recommendation to emotional state

allows final action (watch / return)

3\. INPUT DATA



Use:



state.selectedMovie

state.selectedEmotion

state.eqValues

4\. UI STRUCTURE

Hero Section



Must include:



movie title (large)

background image placeholder

genre tags

Emotional Reasoning Block



Critical part of the screen:



Show explanation:



“Почему этот фильм подходит тебе сейчас”



Include:



selectedEmotion influence

dominant EQ value

short narrative reasoning

5\. EXPLANATION LOGIC



Generate explanation based on:



if calm dominant → relaxing narrative

if energy dominant → dynamic pacing

if romance → emotional intimacy

if tension → psychological engagement

if focus → complex structure

6\. MOVIE DETAILS



Include:



duration (mock)

rating (mock)

genre

short synopsis (mock data allowed)

7\. ACTIONS



Two buttons:



Primary:

"Смотреть"



(no real integration, just UI action placeholder)



Secondary:

"Назад к рекомендациям"



→ returns to Results screen



8\. FILES YOU CAN MODIFY



ONLY:



src/index.html

src/scripts/app.js

src/styles/components.css

src/state.js (only if strictly required)



Do NOT modify router unless broken.



9\. UI REQUIREMENTS

cinematic hero layout

glass overlay panels

strong visual hierarchy

emotional color accent based on state

soft blur background

minimal clutter

10\. MOTION

fade-in hero content

smooth panel slide-up

hover states on buttons

subtle background parallax (optional)

11\. RULES

DO NOT modify previous screens

DO NOT change recommendation logic

DO NOT introduce real backend

DO NOT over-engineer state



Keep implementation focused on final UX layer.



12\. SUCCESS CRITERIA

movie card renders correctly

selectedMovie displayed properly

emotional explanation is visible

navigation back to results works

UI is visually consistent with system

no console errors

13\. OUTPUT EXPECTATION



A final decision screen that completes the emotional recommendation loop and feels like a premium cinematic product interface.

A recommendation layer that visually and logically connects emotion → content.

