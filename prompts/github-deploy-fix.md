\# GitHub Deployment Readiness



\## Context



This project will be published as a public GitHub repository and deployed using GitHub Pages.



The final website must work correctly after deployment without requiring any local development server.



The repository will be public so other participants can open the website, interact with it and review the project.



\---



\## Goal



Audit the entire project and make all changes required for successful deployment on GitHub Pages.



Do not redesign the product.



Do not add new features.



Only fix deployment, compatibility and production readiness.



\---



\## Deployment Target



GitHub Pages



Repository visibility:

Public



Branch:

main



Publishing source:

Root



The project must work correctly when opened from:



https://username.github.io/repository-name/



\---



\## Deployment Checklist



Verify every item.



\### HTML



\- valid HTML5

\- correct document structure

\- correct language attribute

\- proper meta viewport

\- no broken references



\---



\### CSS



\- all styles load correctly

\- no broken imports

\- relative paths only



\---



\### JavaScript



Verify:



\- all modules load correctly

\- all imports use relative paths

\- no local absolute paths

\- no filesystem-only paths

\- no dependency on localhost

\- no dependency on Claude preview server



\---



\### Assets



Verify every asset.



If images exist:



\- use relative paths

\- no absolute disk paths

\- no temporary files

\- no preview URLs



\---



\### Navigation



Verify:



\- onboarding works

\- presets work

\- EQ works

\- results work

\- movie card works



All interactions must function after GitHub deployment.



\---



\### State



Ensure application state initializes correctly after page load.



Refreshing the page must not break the application.



\---



\### Browser Compatibility



Verify compatibility with modern Chromium browsers.



No experimental APIs.



\---



\### Console



Console must contain:



\- zero JavaScript errors

\- zero failed imports

\- zero missing files

\- zero failed asset requests



\---



\### Responsive



Verify:



Desktop:

1440px



Laptop:

1280px



Tablet:

768px



Mobile:

390px



No broken layouts.



\---



\### Accessibility



Verify:



\- buttons remain clickable

\- focus states exist

\- interactive controls are accessible



\---



\### Performance



Remove:



\- unused code

\- duplicate listeners

\- duplicate rendering

\- dead CSS



Only if safe.



\---



\## README



Update README if necessary.



README must include:



\- project description

\- technologies

\- folder structure

\- local launch instructions

\- GitHub Pages deployment instructions



\---



\## Final Verification



Before finishing:



Perform a complete self-review.



Check that the project behaves exactly the same after GitHub deployment as it does in the local preview.



If any deployment issue exists, fix it before finishing.



\---



\## Output



At the end provide a report containing:



1\. Files modified



2\. Problems found



3\. Problems fixed



4\. Remaining limitations



5\. Deployment readiness



Only answer:



READY FOR GITHUB PAGES



if every checklist item passes.

