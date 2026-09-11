# MakerGhat "Our Story" — Task 2 Website Recreation

A React recreation of MakerGhat's "Our Story" page for the MakerGhat Full Stack Developer pre-work assignment. The page translates the supplied Figma direction into a responsive, component-based interface with MakerGhat navigation, storytelling sections, a visual timeline, and footer links.

## Live Demo

[https://makerghat-our-story.netlify.app/](https://makerghat-our-story.netlify.app/)

## GitHub Repository

[https://github.com/irfanhabeeb-002/makerghat_about-us](https://github.com/irfanhabeeb-002/makerghat_about-us)

## Figma Reference

[MakerGhat "Our Story" Figma design](https://www.figma.com/design/11QoixG96b31FhhVDYiteD/MG-Our-Story-?node-id=7278-16487&t=iLMWECWSAUy3EwVz-1)

## Original MakerGhat Reference Page

[https://makerghat.org/about-us/our-story](https://makerghat.org/about-us/our-story)

## Technology Stack

- [React 18](https://react.dev/) and React DOM for the user interface.
- [Vite 5](https://vite.dev/) with `@vitejs/plugin-react` for development and production builds.
- CSS Grid, Flexbox, media queries, custom properties, and responsive sizing in `src/styles.css`.
- Netlify configuration for static deployment.

No backend service, database, router package, UI component library, or additional runtime dependency is used.

## Project Structure

```text
src/
  App.jsx                 Page composition
  main.jsx                React entry point
  styles.css              Responsive page, navigation, timeline, and footer styles
  components/
    Header.jsx            Navigation and responsive menu behavior
    Tabs.jsx              Story-section links
    Hero.jsx              Introductory hero content
    Mission.jsx           Mission section
    WhyMaking.jsx         "Why making?" section
    HowMgStarted.jsx      Origin-story section
    Timeline.jsx          Milestone data and detail-panel state
    TimelineNode.jsx      Reusable timeline milestone
    Footer.jsx            Footer links, contact details, and social links
public/                   Local image and SVG assets used by the page
netlify.toml              Netlify build, publish, Node, and SPA redirect settings
```

## Development Approach

The page is composed from focused React components for the header, tabs, hero, three narrative sections, timeline, and footer. `App.jsx` assembles those sections into the page.

The Figma layout is represented in code with local visual assets, section-level grids, a desktop roadmap treatment, and responsive spacing, typography, and imagery. The timeline contains milestones from 2018 through 2026. Selecting a year updates React state: small screens reveal details inline within the milestone card, while large screens show a separate details panel below the roadmap to avoid covering adjacent milestone artwork.

Navigation links, footer links, contact actions, newsletter link, and social links point to the corresponding MakerGhat destinations. Desktop navigation exposes submenu links on hover or keyboard focus; the mobile menu uses buttons to expand submenu groups.

The implementation preserves MakerGhat-facing information architecture through its navigation labels and external destinations, but it is a standalone frontend and does not integrate with the existing MakerGhat CMS or application code.

## Responsive Design

The CSS is mobile-first and defines layout changes at `560px`, `760px`, `960px`, `1100px`, and a small-screen adjustment at `430px`.

- **Mobile:** hamburger navigation, expandable navigation groups, horizontally scrollable story tabs, one-column content, and a stacked vertical timeline with inline milestone details.
- **Tablet:** two-column narrative section layouts and a two-column footer from `760px` upward.
- **Desktop:** horizontal navigation with hover/focus submenus, expanded footer columns, and the illustrated absolute-position roadmap from `1100px` upward.

The stylesheet also includes reduced-motion and print rules, plus touch-friendly minimum target sizing for coarse pointers.

## Local Development

```bash
npm install
npm run dev
```

Vite serves the project locally. The configured development port is `5173`; Vite will print the final local URL if that port is unavailable.

## Production Build

```bash
npm run build
```

This creates the static production output in `dist/`.

## Deployment

The project is configured for Netlify in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`
- SPA fallback: all paths rewrite to `/index.html`

The public deployment is available at the Live Demo link above.

## Assumptions

- The supplied Figma file is the primary visual reference for this recreation.
- Existing MakerGhat-style content, local project assets, and MakerGhat destinations are used where they are present in the implementation.
- This task is a frontend recreation; no backend, CMS, analytics, form-processing, or authentication behavior is required by the current codebase.
- Existing external MakerGhat, Substack, social, phone, and email links are preserved as standard browser links.

## External Resources & Attribution

- **Design reference:** the supplied [MakerGhat Figma file](https://www.figma.com/design/11QoixG96b31FhhVDYiteD/MG-Our-Story-?node-id=7278-16487&t=iLMWECWSAUy3EwVz-1) and [MakerGhat reference page](https://makerghat.org/about-us/our-story).
- **Visual assets and page content:** local PNG and SVG files in `public/`, used directly by the React components. They include MakerGhat branding, timeline illustrations, photographs, icons, and footer artwork. The repository does not record separate source or licence metadata for individual asset files.
- **Fonts:** [Outfit](https://fonts.google.com/specimen/Outfit) and [Parkinsans](https://fonts.google.com/specimen/Parkinsans), loaded from Google Fonts in `index.html`.
- **Framework and build tooling:** React, React DOM, Vite, and `@vitejs/plugin-react`, as declared in `package.json`.
- **AI-assisted development:** AI coding assistants were used during development for brainstorming, technical clarification, implementation assistance, debugging, and code review. Generated suggestions and code were reviewed, adapted, and tested.

## Assignment Deliverables

- Recreated MakerGhat "Our Story" frontend based on the supplied Figma reference.
- Responsive layouts for mobile, tablet, and desktop breakpoints implemented in CSS.
- Component-based React source code with interactive navigation and milestone details.
- Public Netlify deployment: [makerghat-our-story.netlify.app](https://makerghat-our-story.netlify.app/).
- Source repository: [irfanhabeeb-002/makerghat_about-us](https://github.com/irfanhabeeb-002/makerghat_about-us).
