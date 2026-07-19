# 002 — Replace broad transitions with explicit properties

- **Status**: TODO
- **Commit**: 768674b
- **Severity**: MEDIUM
- **Category**: Performance
- **Estimated scope**: 1 file, four declarations

## Problem

The source-of-truth page uses broad transitions on informational cards, CTAs, and FAQ tabs:

```tsx
// LandingPage.tsx:62 — current
className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"

// LandingPage.tsx:252 and 273 — current
transition: all 0.2s ease;

// LandingPage.tsx:703 — current
className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
```

`transition: all` can animate unintended layout or paint properties and makes later style changes risky.

## Target

Use explicit property lists only. For the interactive controls, use the audit's strong ease-out curve; for simple color changes, use `ease`:

```css
.btn-primary {
  transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1),
              box-shadow 200ms cubic-bezier(0.23, 1, 0.32, 1),
              background-color 200ms ease;
}
.btn-secondary {
  transition: background-color 200ms ease, border-color 200ms ease,
              transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
}
```

For the FAQ tabs, transition `color`, `background-color`, `border-color`, and `transform` only. For passive feature cards, remove the lift motion entirely; if a visual hover remains, transition only `box-shadow` or `border-color`.

## Repo conventions to follow

- The source page keeps CSS in its local `<style>` block and Tailwind utility classes in markup.
- Exact ease-out token value: `cubic-bezier(0.23, 1, 0.32, 1)`.
- Button feedback budget: 100–160ms for pointer-down, 200ms for hover/state color.

## Steps

1. Replace both literal `transition: all 0.2s ease` declarations in `LandingPage.tsx` with explicit properties.
2. Replace `transition-all duration-200` on FAQ tabs with explicit CSS classes or local selectors for the four intended properties.
3. Remove `transition-all` and `hover:-translate-y-1` from the passive `FeatureCard`; retain only a non-spatial visual change if desired.
4. Add `:active { transform: scale(0.97); transition-duration: 160ms; }` to actual buttons/links, not passive cards.

## Boundaries

- Do NOT change layout, content, or component structure.
- Do NOT add new animation libraries.
- Do NOT animate layout properties.
- If the code differs from commit `768674b`, STOP and report.

## Verification

- **Mechanical**: `rg -n "transition: all|transition-all" LandingPage.tsx` must return no matches. Run `npm run lint` and `npm run build`.
- **Feel check**: at 10% playback speed, CTAs should respond without any unexpected padding/size interpolation; rapidly press each CTA and tab to confirm transitions retarget cleanly.
- **Done when**: every transition in `LandingPage.tsx` names its properties explicitly.

