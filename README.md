# GoSpace

Навчальний лендінг GoIT: GoWorking (Quiet Zone) та GoRelaxing (Community Zone).

## Structure

```text
go-space/
├── index.html       # Semantic page markup and inline illustrations
├── css/style.css    # Design tokens, components, responsive styles
├── js/main.js       # Demo lead dialog
├── scripts/build.mjs # Dependency-free single-file build
└── dist/index.html  # GoIT / Netlify artifact
```

## Development

Open `index.html` locally in a browser. Edit the source HTML, CSS and JS separately.
No npm dependencies or external assets are required.

## Build

Node.js 18+:

```sh
node scripts/build.mjs
```

The build keeps the CSS and JavaScript readable and inlines them into `dist/index.html`.
The two GTM placeholder comments remain immediately after the opening `head` and `body` tags.

## GoIT: deployment and analytics

- Before deployment, review the page locally.
- Sign in to Netlify and upload only the `dist/` folder.
- Create GA4 and GTM yourself. Insert GTM snippets into the agreed markers in the source `index.html`, then rebuild and redeploy `dist/`.
- Keep the CTA text exactly `Залишити заявку` for the GTM Click Text condition.
- Export the published GTM container and use the same deployed `dist/index.html` for homework submission.

## Scope

This is a concept, not an operating venue. Prices and opening hours are planned, not live offers. Interior scenes are conceptual inline SVG illustrations, not venue photographs. No analytics, data collection, live booking, invented address, phone number or email are included. The CTA opens a demo dialog so its click can be tested without collecting personal data.
