1\. CONTEXT



You are working on Emotional EQ.



Iteration 01 is completed:



app shell exists

state system works

router switches screens

all 5 screens exist as placeholders



Now we are implementing the FIRST REAL USER INTERACTION SCREEN.



2\. GOAL (STRICT)



Transform the Presets screen from a placeholder into a fully interactive UI.



User must be able to:



visually see 8 emotion presets

click on a preset

see active selection state

update global state.selectedEmotion

proceed to next screen

3\. EXPLICIT DIFFERENCE (IMPORTANT)

BEFORE (current state):

Presets screen is empty or placeholder

no interactive elements

no emotion selection UI

no visual feedback

AFTER (required state):

Presets screen contains 8 interactive emotion cards

each card is clickable

one card can be active at a time

selected emotion is stored in state

UI visually reflects selection

button unlocks after selection

4\. UI STRUCTURE (MANDATORY)



Inside Presets screen render:



Header:

Title: "Какой ты сегодня?"

Subtitle: "Выбери настроение для подбора фильмов"

Emotion Grid (8 items):



Each item MUST include:



label

data-emotion attribute

clickable container

active state styling

hover state styling

5\. EMOTIONS (STATIC DATA)



Create exactly these 8 items:



Calm

Energetic

Romantic

Sad

Focused

Nostalgic

Tense

Happy

6\. INTERACTION RULES (STRICT)



On click of emotion card:



set state.selectedEmotion = emotion value

remove active state from all cards

apply active state to clicked card

enable "Continue" button

7\. CONTINUE BUTTON LOGIC



Button:



label: "Продолжить"

default state: disabled

Activation rule:

enabled ONLY if state.selectedEmotion is not empty

On click:



→ navigate to Emotional EQ screen



8\. DOM CHANGE REQUIREMENT (IMPORTANT)



You MUST modify Presets screen DOM.



Add:



emotion card elements

event listeners for click

active class toggle logic



This is NOT a placeholder update.



9\. FILES YOU CAN MODIFY



ONLY:



src/index.html

src/scripts/app.js

src/scripts/state.js

src/styles/components.css



Do NOT modify router logic unless broken.



10\. UI REQUIREMENTS (FROM UI\_GUIDE)

glassmorphism cards

soft glow per emotion

dark cinematic background

smooth hover transitions

minimal UI noise

11\. RULES (CRITICAL)

Do NOT treat this as repetition of Iteration 01

This is a NEW behavioral layer

Do NOT skip interaction logic

Do NOT leave static UI

Do NOT implement other screens

12\. SUCCESS CRITERIA



Iteration is successful only if:



8 presets are visible

each preset is clickable

active state works correctly

state.selectedEmotion updates

button is disabled until selection

navigation works after click

no console errors

13\. OUTPUT EXPECTATION



A fully interactive Presets screen that introduces emotional input into the system.

