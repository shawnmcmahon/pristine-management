---
name: responsive-design
description: Apply responsive design to all UI. Use when building or
  refactoring components, layouts, or pages to work across all viewports.
---

# Responsive Design Skill

## Rules
- Always use mobile-first CSS (min-width breakpoints)
- Use CSS Grid or Flexbox — never fixed pixel widths for layout
- Standard breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Always include `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Use fluid units: %, vw, vh, rem, clamp()
- Test mentally at 320px, 768px, 1024px, and 1440px

## Patterns to use
- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` for card grids
- Flexbox with `flex-wrap: wrap` for navigation
- `clamp()` for fluid typography