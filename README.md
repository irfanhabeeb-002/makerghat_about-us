# MakerGhat: Our Story

A responsive React and Vite implementation of MakerGhat's Our Story page, based on the supplied Figma design.

## Highlights

- Responsive desktop roadmap with clickable year milestones
- Non-overlapping desktop milestone detail panel and inline mobile milestone cards
- Responsive navigation with desktop hover menus and mobile expandable groups
- Live MakerGhat navigation, resource, program, contact, newsletter, and social links
- Figma-aligned visual timeline and footer

## Development

```bash
npm install
npm run dev
```

The local Vite server is available at the address printed in the terminal.

## Production build

```bash
npm run build
```

The optimized static site is generated in `dist/`.

## Netlify deployment

This project includes `netlify.toml` and is ready to deploy as a static Vite site.

1. Create a Netlify site from this GitHub repository.
2. Netlify reads the included configuration automatically.
3. The build command is `npm run build`; the publish directory is `dist`.

## Project structure

```text
src/
  components/    Page sections and interactive components
  App.jsx        Page composition
  styles.css     Responsive styling and desktop roadmap layout
public/          Provided visual assets
netlify.toml     Netlify build and SPA redirect configuration
```
