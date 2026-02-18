# Copilot Instructions

## Project overview
- Static multi-page site for "Animation Club" built with HTML, CSS, and vanilla JavaScript.
- Pages: [index.html](index.html) and [pages/](pages/) (dicas, tecnicas, materiais, regras-do-club).
- Shared layout (header, aside navigation, footer) is injected by [scripts/loadModularPages.js](scripts/loadModularPages.js).
- Styles are centralized in [css/default.css](css/default.css) (tokens, base styles) and [css/style.css](css/style.css) (components and layouts).
- Behavior is in [scripts/](scripts/) with small focused files.

## Architecture and patterns
- Header/aside/footer are empty in HTML and populated at runtime from `modulars`.
- Navigation highlight uses `window.functions.text_format()` to normalize the URL/page name.
- Slider behavior is data-driven: elements use `data-slider` and `data-slider-prop` attributes and CSS variables.
- Assets live under [assets/](assets/) and are referenced with relative paths. Use `./` for root pages, `../` for pages in [pages/](pages/).

## How to add or edit pages
- Start with the existing page shell and keep `header`, `aside`, and `footer` tags present.
- Always include `functions.js`, `loadModularPages.js`, and `slider.js` if the page uses shared layout or sliders.
- Keep page titles consistent: `Animation Club: <PageName>`.

## Styling guidelines
- Reuse CSS variables from [css/default.css](css/default.css) for colors, spacing, typography, and shadows.
- Prefer existing utility or component classes from [css/style.css](css/style.css) before creating new ones.
- Keep responsive behavior consistent with the existing structure (mobile-first rules, CSS custom properties).
- Avoid inline styles except for 1-off cases like external iframes.

## JavaScript guidelines
- Prefer small files with a single responsibility.
- Avoid adding dependencies or build steps.
- If you add new global helpers, attach them to `window.functions`.
- When adding sliders, follow the existing `data-slider` conventions and update CSS variables instead of hardcoded styles.

## Asset and path rules
- Keep assets organized in existing folders (images, gifs, svg).
- Use lowercase file names and avoid spaces.
- Validate relative paths based on the page location (root vs. [pages/](pages/)).

## Content and accessibility
- Use meaningful `alt` text for images; empty `alt` only when decorative.
- Preserve the Portuguese content style in user-facing text.
- Keep headings hierarchical (`h1`, then `h2`, etc.).

## Testing and validation
- Open `index.html` in a browser and navigate to each page.
- Verify the navigation highlight and header/footer injection.
- Check slider behavior and responsive layout on mobile widths.
