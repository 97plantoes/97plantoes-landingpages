# 004 — Add immediate press feedback to conversion controls

- **Status**: TODO
- **Commit**: 768674b
- **Severity**: MEDIUM
- **Category**: Physicality & origin
- **Estimated scope**: 2 files, local CSS edits

## Problem

High-value controls in the best-received direction respond only after hover, not at pointer-down:

```css
/* src/versions/app-discovery/LandingPage.tsx:137 — current */
.atlas-header-cta { transition: transform 180ms ease, background 180ms ease; }
.atlas-header-cta:hover { background: var(--atlas-deep-aqua); transform: translateY(-2px); }

/* src/versions/app-discovery/LandingPage.tsx:249 — current */
.atlas-store-button { transition: transform 180ms ease, background 180ms ease; }
.atlas-store-button:hover { background: var(--atlas-signal); transform: translateY(-3px); }
```

The source-of-truth `.btn-primary`, `.btn-secondary`, and store links have the same omission. On touch, hover may never communicate that the press registered.

## Target

Add subtle, immediate press feedback using the exact prescribed scale and duration:

```css
.atlas-header-cta:active,
.atlas-store-button:active {
  transform: scale(0.97);
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
}
```

Where a resting or hover transform already exists, compose the scale so pointer-down does not cause a directional jump. The press state must be visible on both touch and mouse. FAQ summaries should use a non-layout response such as `opacity: 0.72` or `transform: scale(0.99)` on an inner element.

## Repo conventions to follow

- Use `:active` adjacent to existing hover declarations.
- Exact press scale: `0.97` for buttons and store CTAs.
- Exact press budget: `160ms`.
- Exact ease-out: `cubic-bezier(0.23, 1, 0.32, 1)`.

## Steps

1. Add composed `:active` states for `.atlas-header-cta` and `.atlas-store-button` in `app-discovery`.
2. Add `:active` feedback to `.btn-primary`, `.btn-secondary`, and both store links in `LandingPage.tsx`.
3. Add a restrained pointer-down response to `.atlas-faq-list summary` without changing its layout.
4. Confirm keyboard activation still relies on existing focus-visible feedback and is not hidden by `:active` styles.

## Boundaries

- Do NOT add haptics, sound, JavaScript gesture code, or dependencies.
- Do NOT alter link destinations or actions.
- Do NOT change passive cards.
- If the selectors differ from commit `768674b`, STOP and report.

## Verification

- **Mechanical**: run `npm run lint` and `npm run build`.
- **Feel check**: press and hold each target on a real touch device and with a mouse. Feedback must begin on pointer-down, not after release. At 10% speed, no control should jump when the hover translate changes to the active scale.
- **Done when**: every conversion CTA in both cited files has visible pointer-down feedback and a clear keyboard focus state.

