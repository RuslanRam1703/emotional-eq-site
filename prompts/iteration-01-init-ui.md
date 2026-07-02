1\. CONTEXT



You are working on a frontend project called Emotional EQ.



The project is a cinematic emotional interface for selecting movies based on user mood.



Architecture is already defined:



Vanilla HTML/CSS/JS

state-driven UI

modular CSS system

screen-based navigation



Current state:



no UI implemented yet

only folder structure and documentation exist

2\. GOAL



Create the initial UI shell of the application.



You must implement:



base layout structure

screen system foundation

navigation skeleton

minimal state system

placeholder UI for all screens



Do NOT implement full UI logic or styling details.



3\. SCREENS TO PREPARE (PLACEHOLDERS ONLY)

Onboarding

Presets

Emotional EQ

Results

Movie Card



Each screen must exist as a renderable state, even if visually empty.



4\. FILES YOU ARE ALLOWED TO MODIFY

src/index.html

src/styles/base.css

src/styles/tokens.css

src/scripts/app.js

src/scripts/state.js

src/scripts/router.js



You may create new helper functions ONLY inside existing JS files.



5\. RULES

Do NOT change project architecture

Do NOT add frameworks or libraries

Do NOT implement full UI design yet

Do NOT add animations

Do NOT redesign components



You are building ONLY structure + flow.



6\. REQUIRED IMPLEMENTATION

6.1 State system



Create a minimal state with:



currentScreen

selectedEmotion (empty initially)

eqValues (default neutral values)

selectedMovie (null)

6.2 Router logic



Implement simple screen switching based on state.



6.3 UI structure



Each screen should exist as a section/container:



visible only when active

others hidden

6.4 Navigation flow (hardcoded for now)



Onboarding → Presets → EQ → Results → Movie Card



7\. EXPECTED OUTPUT



After implementation:



app loads without errors

switching between screens works

state updates correctly

placeholders for all screens exist

no styling complexity introduced

8\. SUCCESS CRITERIA

no JS errors in console

navigation works between all screens

state changes correctly reflect UI

structure is clean and extensible

no additional dependencies introduced

9\. IMPORTANT CONSTRAINT



This is ONLY the foundation layer.



Do not attempt to improve UX or UI yet.



Focus strictly on:



structure, flow, and state consistency

