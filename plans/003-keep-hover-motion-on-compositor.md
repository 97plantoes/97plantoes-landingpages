# 003 — Keep hover motion on the compositor

- **Status**: TODO
- **Commit**: 768674b
- **Severity**: MEDIUM
- **Category**: Performance
- **Estimated scope**: 8 files, localized CSS edits

## Problem

Several hover interactions animate layout properties on every frame:

```css
/* src/versions/app-discovery/LandingPage.tsx:170 — current */
.atlas-hero-link { transition: color 160ms ease, gap 160ms ease; }
.atlas-hero-link:hover { color: var(--atlas-deep-aqua); gap: 14px; }

/* src/versions/app-atlas/LandingPage.tsx:225 — current */
.exp-coverage__row {
  padding: 14px 4px;
  transition: background 160ms ease, padding-left 160ms ease;
}
.exp-coverage__row:hover { background: rgba(104, 181, 185, 0.12); padding-left: 14px; }
```

Equivalent hero-link `gap` animation appears in `app-atlas`, `app-caderno`, `app-noturno`, `app-ops`, and `app-roteiro`; padding animation also appears in `trust-ledger` and `map-radar`.

## Target

Keep layout fixed. Move only a child icon/pseudo-element with `transform`, and transition background/color normally:

```css
.atlas-hero-link {
  gap: 9px;
  transition: color 160ms ease;
}
.atlas-hero-link svg {
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
}
@media (hover: hover) and (pointer: fine) {
  .atlas-hero-link:hover svg { transform: translateX(5px); }
}
```

For passive coverage rows, remove positional motion. A background-color change is sufficient; if movement is essential on an interactive row, move an inner child with `transform: translateX(10px)` without changing padding.

## Repo conventions to follow

- Keep page-specific prefixes (`atlas-`, `exp-`, `fld-`, `nox-`, `ops-`, `itn-`).
- Exact ease-out: `cubic-bezier(0.23, 1, 0.32, 1)`.
- Gate hover motion with `@media (hover: hover) and (pointer: fine)`.

## Steps

1. Replace animated `gap` with a fixed gap plus SVG `transform` in `app-discovery`.
2. Apply the same pattern to hero links in `app-atlas`, `app-caderno`, `app-noturno`, `app-ops`, and `app-roteiro`.
3. Remove animated `padding-left` from `app-atlas` coverage rows; retain only a background-color response because the rows are passive.
4. Remove animated padding from the cited rows/cards in `trust-ledger` and `map-radar`, using a child transform only if the element is genuinely interactive.
5. Gate every new spatial hover under `(hover: hover) and (pointer: fine)`.

## Boundaries

- Do NOT change resting dimensions or content.
- Do NOT add wrappers unless an existing icon/child cannot carry the transform.
- Do NOT animate width, height, margin, padding, top, left, or gap.
- Do NOT add dependencies.
- If code has drifted since commit `768674b`, STOP and report.

## Verification

- **Mechanical**: run `rg -n "transition:[^;]*(gap|padding)|transition-property:[^;]*(gap|padding)" src/versions`; expected result: no relevant matches. Run `npm run lint` and `npm run build`.
- **Feel check**: use DevTools Performance while hovering each target repeatedly. Layout events must not be emitted during the hover transition. Test touch emulation: spatial hover must not stick.
- **Done when**: the interactions look equivalent, layout remains fixed, and only transform/opacity handle positional motion.

