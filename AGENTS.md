# AGENTS instructions

This repository is a small static web experience with three main files:
- [index.html](index.html) for the page structure and content.
- [index.css](index.css) for layout, animation, and visual styling.
- [index.js](index.js) for the timed transitions between the splash screen, intro sequence, and menu.

## Working conventions
- Treat this as a lightweight static site. There is no build step, bundler, or package manager configuration.
- For local preview, open [index.html](index.html) in a browser or run `python3 -m http.server 8000` from the repository root.
- Preserve the existing element IDs used by the script, especially `splash`, `intro`, and `menu`, unless the change intentionally updates the behavior.
- The current JavaScript relies on `setTimeout` and direct DOM manipulation. Keep new behavior consistent with that style unless a broader refactor is requested.
- When changing animations or timing, prefer small, incremental edits that fit the existing CSS keyframes and classes.

## Helpful context
- The project is documented in [README.md](README.md), which is intentionally minimal.
- Avoid introducing frameworks or dependencies unless the task explicitly requires them.
