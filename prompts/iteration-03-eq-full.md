1\. CONTEXT



You are working on Emotional EQ.



Previous iterations:



Iteration 01: app shell + routing

Iteration 02: Presets full interactive UI



Now we implement the core system of the product: Emotional Equalizer screen.



This is the main differentiation feature of the entire product.



2\. GOAL



Build a fully functional Emotional EQ screen where user can:



adjust 5 emotional parameters

see real-time emotional state feedback

generate emotional profile for movie recommendations

proceed to Results screen



This is the CORE PRODUCT SYSTEM.



3\. EQ MODEL (DATA STRUCTURE)



Use state.eqValues:



calm

energy

romance

tension

focus



Each value range:

0 → 100



Default:

all values = 50 (neutral state)



4\. UI STRUCTURE (MANDATORY)

Header:

"Настрой своё настроение"

subtitle: explanation text

Main EQ Controls:



Create 5 sliders:



Each slider includes:



label (emotion name)

range input (0–100)

visual fill bar

glow intensity based on value

5\. VISUAL MAPPING (IMPORTANT)



Each emotion must visually respond:



calm → blue tone

energy → orange tone

romance → pink tone

tension → red/purple tone

focus → teal/green tone



Glow intensity increases with value.



6\. INTERACTION LOGIC



On slider change:



update state.eqValues

update UI fill bar

update emotional “summary state” (optional visual indicator)

7\. OPTIONAL (BUT RECOMMENDED)



Add small “emotion summary card”:



shows dominant emotion

updates dynamically based on highest value

8\. NAVIGATION



Button:



"Показать результат"



Rules:



enabled only if at least one slider changed OR state != default

on click → navigate to Results screen

9\. FILES YOU CAN MODIFY



ONLY:



src/index.html

src/scripts/app.js

src/scripts/state.js

src/styles/components.css



Do NOT modify router.js unless broken.



10\. UI REQUIREMENTS



Must follow UI\_GUIDE:



glassmorphism UI layers

cinematic dark background

soft gradients per emotion

smooth slider transitions

no harsh UI elements

11\. MOTION REQUIREMENTS



Add micro-interactions:



slider thumb smooth movement

fill bar animated transition

subtle glow pulse on active slider



No heavy animations.



12\. RULES

Do NOT change Presets screen

Do NOT add new screens

Do NOT restructure state system

Do NOT introduce frameworks

Keep implementation contained to EQ screen

13\. SUCCESS CRITERIA



Iteration is successful if:



all 5 sliders render

state.eqValues updates correctly

UI reacts to slider movement

button becomes active when interaction happens

navigation to Results works

no console errors

visual system remains consistent

14\. OUTPUT EXPECTATION



A fully functional Emotional EQ screen that transforms abstract emotions into a controllable interface system.

