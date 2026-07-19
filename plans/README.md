# Animation improvement plans

Audit baseline: commit `768674b`.

| Plan | Title | Severity | Status |
| --- | --- | --- | --- |
| 001 | Preserve feedback while respecting reduced motion | MEDIUM | TODO |
| 002 | Replace broad transitions with explicit properties | MEDIUM | TODO |
| 003 | Keep hover motion on the compositor | MEDIUM | TODO |
| 004 | Add immediate press feedback to conversion controls | MEDIUM | TODO |

## Recommended execution order

1. `003-keep-hover-motion-on-compositor.md` — removes layout motion that otherwise complicates reduced-motion behavior.
2. `002-replace-transition-all.md` — makes the source page's transition surface explicit.
3. `004-add-press-feedback.md` — adds pointer-down feedback on top of explicit transform transitions.
4. `001-respect-reduced-motion.md` — finalizes the accessibility branch after the motion properties are stable.

Dependencies: 001 should run after 003; 004 should run after 002. The plans otherwise remain independent.
