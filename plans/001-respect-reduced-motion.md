# 001 — Preserve feedback while respecting reduced motion

- **Status**: TODO
- **Commit**: 768674b
- **Severity**: MEDIUM
- **Category**: Accessibility
- **Estimated scope**: 7 files, small-to-medium CSS edits

## Problem

The source-of-truth landing runs continuous marquee, float, and pulse motion without a reduced-motion branch:

```css
/* LandingPage.tsx:225 — current */
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

The app variants go to the opposite extreme and suppress virtually every transition, including useful color and opacity feedback:

```css
/* src/versions/app-discovery/LandingPage.tsx:316 — current */
@media (prefers-reduced-motion: reduce) {
  .atlas-page *, .atlas-page *::before, .atlas-page *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

The same reset exists in `app-atlas`, `app-caderno`, `app-noturno`, `app-ops`, and `app-roteiro`.

## Target

- In `LandingPage.tsx`, stop infinite marquee, float, and pulse movement under `prefers-reduced-motion: reduce`; keep a short `opacity 200ms cubic-bezier(0.23, 1, 0.32, 1)` feedback where it aids comprehension.
- In each listed variant, replace the blanket `0.01ms` reset with scoped rules that remove positional transforms and animations while retaining color/opacity transitions.
- Reduced motion must never introduce instant layout jumps on hover.

```css
@media (prefers-reduced-motion: reduce) {
  .animate-marquee { animation: none; transform: none; }
  .animate-float { animation: none; transform: none; }
  .animate-pulse { animation: none; }

  .atlas-header-cta,
  .atlas-store-button,
  .atlas-faq-list summary svg {
    transition: color 200ms cubic-bezier(0.23, 1, 0.32, 1),
                background-color 200ms cubic-bezier(0.23, 1, 0.32, 1),
                opacity 200ms cubic-bezier(0.23, 1, 0.32, 1);
  }
}
```

## Repo conventions to follow

- Reduced-motion rules live at the bottom of each page's inline `<style>` block.
- Preserve the existing `prefers-reduced-transparency` and `prefers-contrast` blocks.
- Use the audit's strong ease-out exactly: `cubic-bezier(0.23, 1, 0.32, 1)`.

## Steps

1. Add a reduced-motion block to `LandingPage.tsx` covering `.animate-marquee`, `.animate-float`, and `.animate-pulse`.
2. Replace the blanket reset in `src/versions/app-discovery/LandingPage.tsx` with scoped removal of spatial motion and retained 200ms color/opacity feedback.
3. Apply the same scoped pattern, using each file's own prefix, to `app-atlas`, `app-caderno`, `app-noturno`, `app-ops`, and `app-roteiro`.
4. Ensure hover rules that change `gap` or `padding` do not survive in reduced-motion mode; plan 003 removes those properties at the source.

## Boundaries

- Do NOT change copy, markup, layout, colors, or component behavior.
- Do NOT add dependencies.
- Do NOT remove focus feedback.
- If the cited reset blocks have drifted since commit `768674b`, STOP and report instead of improvising.

## Verification

- **Mechanical**: run `npm run lint` and `npm run build`; both must exit 0.
- **Feel check**: emulate `prefers-reduced-motion: reduce` in DevTools. The source page must show a static marquee and static hero artwork. Buttons, FAQ state, and focus must retain color/opacity feedback without translating, rotating, or pulsing.
- **Done when**: no infinite animation runs under reduced motion and no page globally reduces every transition to `0.01ms`.

