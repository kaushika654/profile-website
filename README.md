# Profile Website + CI/CD Pipeline

A personal single-page profile website built with **HTML5, CSS3 and vanilla JavaScript only** (no frameworks, libraries or package managers), automatically validated and deployed to GitHub Pages with GitHub Actions.

**Live site:** https://kaushika654.github.io/profile-website/

## Sections
Hero, Professional Journey (timeline), Skills, Personal Likings (interest cards), Hobbies (circular card layout with lightbox), Family (flip cards) and Footer.

## Project structure
```
profile-website/
index.html
css/
  theme.css  <- CSS variables only (the one theme file)
  style.css<- layout and components, uses var() everywhere

js/main.js <- navigation, timeline, lightbox, flip cards, footer

images/ <- hero, journey, interests, family, hobbies

.github/workflows/ <- five GitHub Actions workflows

.htmlhintrc

.stylelintrc.json

 README.md
```

## Theming
Every colour, font, spacing value and radius lives in `css/theme.css` as a CSS variable. Changing that one file changes the whole site, with no HTML or `style.css` edits.
- **Ocean breeze** (the current default) and **dark mode** were each created on their own branch (`theme/ocean-breeze`, `theme/dark-mode`) by changing only `theme.css`, then merged through a pull request.
- To try a theme locally, check out its branch or replace the `:root` values.
- The Family section overrides the variables locally with a warm colour palette, scoped to that section.

## CI/CD pipeline
Workflow - Purpose 
`validate.yml` - HTMLHint and Stylelint on every push and pull request 
`deploy.yml` - Deploys to GitHub Pages when `main` changes 
`pr-checks.yml` - PR quality gates: title tag, image alt text, no `console.log`
`lighthouse.yml` - Lighthouse audit after each deploy and weekly; the report is uploaded as an artifact 
`notify.yml` - Posts the deployment result (success or failure) to Slack through a webhook stored as a repository secret 

## Git workflow
`main` (production, auto-deploys) <- `develop` (integration) <- `feature/*`, `theme/*`, `ci/*` branches.

No direct commits to `main`: every change goes through a pull request, and `main` is protected by a branch ruleset that requires the `all-checks-passed` status check.

## Notes and deviations
- **Stylelint instead of CSSLint:** CSSLint cannot parse CSS Grid (`fr` units) or CSS custom properties, so it reported false errors. Stylelint is used in `validate.yml` instead.
- **Extra Skills section** added using the existing card styles.
- **Family section** uses illustrations instead of photos.

## Built with
HTML, CSS & JS | Deployed via GitHub Actions