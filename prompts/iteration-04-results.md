. CONTEXT



You are working on Emotional EQ.



Previous iterations:



Shell (Iteration 01)

Presets interaction (Iteration 02)

Emotional EQ system (Iteration 03)



Now we implement the Results screen — recommendation layer.



This screen translates emotional input into content output.



2\. GOAL



Build a functional Results screen that:



receives state from Presets and EQ

generates a list of movies (mock data)

visually presents recommendations

provides reason-based explanations

allows navigation to Movie Card

3\. INPUT DATA



Use:



From Presets:

state.selectedEmotion

From EQ:

state.eqValues

4\. MOCK RECOMMENDATION ENGINE



Create simple mapping logic:



Example:



high calm → drama / slow cinema

high energy → action / thriller

high romance → romance films

high tension → psychological thriller

high focus → sci-fi / complex narratives

5\. UI STRUCTURE

Header:

"Подборка для твоего состояния"

Subtitle:

dynamic emotion summary

6\. MOVIE CARDS (REQUIRED)



Render list of 6–10 mock movies:



Each card includes:



title

genre

mood match indicator

short explanation:

"Почему этот фильм подходит"

7\. EXPLANATION LOGIC



Each movie MUST show:



link to selectedEmotion OR eqValues dominance

reason text based on emotional match



Example:



“Высокий уровень спокойствия делает этот фильм подходящим для расслабленного просмотра”



8\. INTERACTION



Each movie card:



clickable

sets state.selectedMovie

navigates to Movie Card screen

9\. FILES YOU CAN MODIFY



ONLY:



src/index.html

src/scripts/app.js

src/scripts/state.js

src/styles/components.css



No router changes unless critical.



10\. UI REQUIREMENTS

glassmorphism cards

cinematic layout grid

soft hover elevation

emotional color accents per match score

clean spacing hierarchy

11\. MOTION

cards animate on hover (subtle lift)

fade-in on load

smooth transition between states



No heavy animation systems.



12\. RULES

Do NOT modify EQ or Presets logic

Do NOT introduce real backend

Use only mock dataset

Keep logic deterministic and simple

13\. SUCCESS CRITERIA

results render correctly

at least 6 movies displayed

emotional logic reflected in UI

clicking card navigates to Movie Card

state.selectedMovie updates

no console errors

14\. OUTPUT EXPECTATION



A recommendation layer that visually and logically connects emotion → content.

