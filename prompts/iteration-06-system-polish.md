1\. CONTEXT



You are working on Emotional EQ.



Previous iterations:



01: Shell + routing

02: Presets interaction layer

03: Emotional EQ system

04: Results system

05: Movie Card (final layer)



Now the product is functionally complete.



This iteration focuses on system-wide polish and consistency.



2\. GOAL



Improve the overall product quality without adding new features.



Focus on:



motion consistency

UI coherence

interaction smoothness

visual hierarchy cleanup

bug elimination

UX friction reduction

3\. STRICT RULE



Do NOT add any new functionality.



Only refine existing behavior.



4\. AREAS OF WORK

4.1 Motion system



Standardize:



hover transitions

screen transitions

button interactions

card interactions



All transitions must feel consistent across screens.



4.2 Visual consistency audit



Fix inconsistencies:



spacing mismatches

font hierarchy issues

inconsistent glow intensities

uneven card styles

4.3 Interaction refinement



Improve:



click feedback timing

button state transitions

slider responsiveness (if any lag exists)

active state clarity

4.4 Navigation UX smoothing



Ensure:



no abrupt screen switches

transitions feel continuous

state updates do not cause visual flicker

4.5 Performance hygiene



Remove:



redundant DOM updates

unnecessary re-renders

duplicated event listeners

5\. FILES YOU CAN MODIFY



ONLY:



src/styles/components.css

src/styles/base.css

src/scripts/app.js



Do NOT modify:



state structure

router logic

screen architecture

data model

6\. UI REQUIREMENTS



Maintain:



cinematic dark theme

glassmorphism system

emotional color mapping



But enforce:



consistent blur intensity

consistent border radius

consistent shadow depth

7\. MOTION GUIDELINES



Standardize durations:



UI hover: 150–200ms

transitions: 250–400ms

screen transitions: 400–600ms



Use easing:



smooth cubic-bezier for all interactions

8\. SUCCESS CRITERIA

UI feels unified across all screens

no inconsistent animations

no visual glitches

navigation feels smooth

interaction feedback is immediate

no console warnings or errors

9\. OUTPUT EXPECTATION



A polished, production-quality UI system with consistent motion language and refined UX behavior.

