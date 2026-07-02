Project Emotional EQ is fully functional.



Now we add visual content layer for cinematic perception.



2\. GOAL



Introduce a poster system for movies to transform UI from “blank cards” into “cinematic streaming experience”.



3\. RULE



Do NOT add backend, APIs, or external dependencies.



Only frontend mock assets.



4\. POSTER SYSTEM DESIGN



Each movie must have:



poster field (mock data):

gradient-based visual block

optional SVG overlay texture

emotion-based color mapping

5\. EMOTION → COLOR MAPPING

calm → deep blue gradient

energy → orange / amber

romance → pink / magenta

tension → dark red / purple

focus → teal / cyan

nostalgic → muted warm gray

6\. IMPLEMENTATION REQUIREMENTS



In Results screen + Movie Card:



Replace empty areas with:



poster container div

gradient background per movie

subtle noise overlay (CSS optional)

hover zoom effect

7\. UI BEHAVIOR



Poster must:



fill top portion of card

respond to hover (scale 1.02–1.04)

have soft glow based on emotion

remain consistent across screens

8\. DATA MODEL (MOCK)



Each movie object must include:



title

genre

emotion tag

posterStyle (gradient params)

9\. FILES ALLOWED

src/index.html

src/scripts/app.js

src/styles/components.css

src/styles/base.css

10\. SUCCESS CRITERIA

all movie cards have visual poster

no empty UI blocks

Results screen feels like streaming catalog

Movie Card feels cinematic

system remains stable

