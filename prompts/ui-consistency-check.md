You are working on Emotional EQ UI system.



Your task is NOT to add features.



Your task is to verify consistency of:



UI behavior

visual alignment

motion system

typography meaning

emotional tone

2\. CORE RULE



If something violates design intent — it must be flagged and fixed.



3\. TYPOGRAPHY VALIDATION



Check all UI text:



Must NOT include:

medical tone

physical health framing

incorrect emotional framing

Must align with:

cinematic experience

emotional mood selection

film recommendation context

4\. REQUIRED TEXT RULES

BAD EXAMPLE:

“Как ты себя чувствуешь?”

GOOD EXAMPLE:

“Какое у тебя настроение?”

“Что ты хочешь посмотреть сегодня?”

“Выбери эмоциональное состояние”

5\. SLIDER UX VALIDATION (CRITICAL)



Check Emotional EQ sliders:



REQUIRED BEHAVIOR:

Track:

base track must be visible always

active fill appears ONLY when value > 0 or deviation from neutral

Thumb:

must sit exactly ON the track center line

must not visually detach or float below/above track

6\. LIGHT / GLOW SYSTEM RULE

Neutral state (value = 50):

NO glow

NO active highlight

only base track visible

Active deviation:

glow appears progressively from center outward

intensity increases with distance from neutral

7\. Z-INDEX / LAYERING RULE



Ensure:



thumb is above track

fill is below thumb

glow is behind both

8\. MOTION CONSISTENCY CHECK



All animations must:



use same easing curve

use same duration scale:

micro: 100–150ms

UI: 200–300ms

transitions: 400–500ms

9\. OUTPUT REQUIREMENT



If inconsistencies are found:



list issue

explain why it breaks UX

fix it directly in code

10\. FINAL GOAL



Ensure UI feels:



intentional

cinematic

physically consistent

emotionally coherent

