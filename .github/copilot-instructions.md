# Copilot Instructions

## Project overview
- Static multi-page site for "Animation Club" built with HTML, CSS, and vanilla JavaScript.
- Pages: [index.html](index.html) and [pages/](pages/) (dicas, tecnicas, materiais, regras-do-club).
- Shared layout (header, aside navigation, footer) is injected by [scripts/loadModularPages.js](scripts/loadModularPages.js).
- Styles are centralized in [css/default.css](css/default.css) (tokens, base styles) and [css/style.css](css/style.css) (components and layouts).
- Behavior is in [scripts/](scripts/) with small focused files.

## Page structure and content
- **dicas.html**: FAQ-style cards with expandable sections for animator tips and best practices using `.faq_container` pattern.
- **tecnicas.html**: Principle cards with sliders showing GIFs, descriptions, and key points for animation techniques.
- **materiais.html**: Gallery of tools and resources organized in grid layout.
- **regras-do-club.html**: Club rules and membership guidelines with structured sections for different rule categories.

## Architecture and patterns
- Header/aside/footer are empty in HTML and populated at runtime from `modulars`.
- Navigation highlight uses `window.functions.text_format()` to normalize the URL/page name.
- Slider behavior is data-driven: elements use `data-slider` and `data-slider-prop` attributes and CSS variables.
- Assets live under [assets/](assets/) and are referenced with relative paths. Use `./` for root pages, `../` for pages in [pages/](pages/).

## How to add or edit pages
- Start with the existing page shell and keep `header`, `aside`, and `footer` tags present.
- Always include `functions.js` and `loadModularPages.js` for shared layout injection.
- Include `slider.js` only if the page features sliders (e.g., principle showcases).
- Include `cardDicas.js` only if the page uses expandable FAQ cards.
- Keep page titles consistent: `Animation Club: <PageName>`.
- Use `.introduction` section with `h1` (main title) and `h2` (subtitle) as the page header.

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
- PPage naming and patterns
- Use lowercase, hyphenated filenames for pages (e.g., `regras-do-club.html`).
- Directory structure: root pages in root directory, pages in [pages/](pages/) subdirectory.
- Section classes follow semantic structure: `.introduction`, `.dicas`, `.principles`, `.rules`, etc.

## Common component patterns
- **FAQ/Expandable cards**: Use `.faq_container` within `.wrapper_card_*` for toggleable content (see dicas.html).
- **Text formatting**: Use `window.functions.text_format()` for consistent text normalization (e.g., navigation matching).
- **Responsive spacing**: Leverage CSS variables from default.css (--spacing-*, --font-*, --color-*).

## Testing and validation
- Open `index.html` in a browser and navigate to each page.
- Verify the navigation highlight and header/footer injection.
- Check slider behavior and responsive layout on mobile widths.
- Ensure all internal links use consistent relative paths (../assets/, ../css/, etc.)
- Open `index.html` in a browser and navigate to each page.
- Verify the navigation highlight and header/footer injection.
- Check slider behavior and responsive layout on mobile widths.
