---
name: v1c-motion-review
description: Review UI interactions against the V1Components motion baseline. Use for motion QA, animation regressions, interaction critique, or comparing a component against an approved V1Components preview.
license: MIT
---

# Review V1Components motion

Use the component's normal entry point. Compare its real behavior with the closest approved example in the [Lab](https://victormarques.dev/lab). Inspect the hit area, transient animation layer, and the final semantic state. Keep review-only requests read-only.

1. **Origin and clipping.** Enter from two edges, exit mid-transition, and re-enter. Confirm that fill and border share an origin inside the real hit area. Verify the focus ring, selected state, and corner shape on both themes.
2. **Timing and feedback.** Activate using pointer, keyboard, and touch. Check when the state changes and where feedback starts. In Like Burst or Star Rating, the burst should sit over the icon. Whole-control light belongs to the five-star event. Repeated input should settle without orphaned particles or duplicated callbacks.
3. **Geometry.** Compare trigger bounds before and after disclosure and use content of different lengths. Check that tabs stay put, accordion width holds, and one expanding Bento card leaves its neighbors at rest. For a drag or reorder, test cancellation and the preview before release.
4. **Access and recovery.** Repeat with reduced motion and without hover. Confirm that state and focus remain readable, Escape or an outside click dismisses applicable overlays, and rapid reversals leave the right state.

Report reproducible findings with the component, input sequence, observed behavior, and expected outcome. Lead with broken input or state, then geometry and motion polish. Label anything inferred from code instead of reproduced in the browser. For implementation work, use the V1Components motion workflow.
