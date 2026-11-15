---
name: v1c-motion
description: Implement V1Components-style UI motion for controls, disclosures, press feedback, and gestures. Use when building or fixing interaction motion and when asked to apply V1Components motion to an existing design system.
license: MIT
---

# V1Components motion

Identify the input, the state it changes, and the element that should acknowledge it. Start from the existing component, its design tokens, and the closest released example. Settle in a state that communicates the outcome after the effect ends.

- **Hover.** Start the light at the pointer's entry into the actual control. Share the origin and easing between fill and existing border. Clip the fill to the control's resting radius and preserve its focus ring. For a segmented control, each enabled segment gets its own hit area and feedback, including inactive segments.
- **Activation.** Commit selection, count, or progress immediately. Anchor transient feedback to the activated icon or hit area. Reserve whole-control light and particles for a milestone with a real meaning, such as the fifth star.
- **Disclosure.** Keep the trigger and neighboring controls stable. Reveal content along the expansion axis using the existing surface radius. Preserve the menu's alignment, dismissal, and focus behavior.
- **Gestures.** Keep the content under the pointer during the drag. Show where an item will land before release and make interruption and cancellation settle cleanly.
- **Implementation.** Reuse the existing hover handler, motion tokens, and runtime. CSS suits short state transitions. Use the component's existing spring or animation runtime for reversible motion, physical gestures, or choreography that needs cancellation. Keep decorative layers out of pointer input and the accessibility tree. Choose a static state cue for reduced motion.

Read [released examples and token values](references/patterns.md) for a relevant starting point. Verify pointer re-entry, keyboard and touch input, and reduced motion. For an audit with no implementation requested, use the motion review workflow.
