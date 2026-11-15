# Released motion patterns

## Timing

Use the host design system's motion tokens. These values are the V1Components reference when porting to another system.

| Role | V1Components token | Value |
| --- | --- | --- |
| Immediate acknowledgement | `--vi-motion-duration-instant` | 80 ms |
| Press or local state transition | `--vi-motion-duration-fast` | 120 ms |
| Selection or disclosure transition | `--vi-motion-duration-standard` | 220 ms |
| Deliberate feedback or reveal | `--vi-motion-duration-slow` | 420 ms |
| Feedback settling | `--vi-motion-ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` |

Choose duration by interaction size. The Ripple Feedback ripple settles in 420 ms, and Like Burst's airborne heart fades over 560 ms. Neither duration delays the actual state change.

## Choose the closest example

- **Hover fill and border.** [Segmented](https://victormarques.dev/lab#v1c-segmented) and [Ripple Feedback](https://victormarques.dev/lab#v1c-ripple-feedback). Measure the real hit area on entry. Give fill and border one origin and one progress value. Let the hover settle at the end of entry and fade on leave. For keyboard activation, use the center of the focused control for a ripple. Keep hover and activation as independent states.
- **Icon feedback.** [Like Burst](https://victormarques.dev/lab#v1c-like-burst) and [Star Rating](https://victormarques.dev/lab#v1c-star-rating). Center the rising glyph on the icon, even beside a label or inside a group. For five stars, stagger from the first star to the fifth and finish with the accent border, outer glow, and sparks. Cancel or replace interrupted effects and clean up temporary layers.
- **Reveals.** [Speed Dial FAB](https://victormarques.dev/lab#v1c-speed-dial-fab), [Accordion Spring](https://victormarques.dev/lab#v1c-accordion-spring), and [Tab Pill Glide](https://victormarques.dev/lab#v1c-tab-pill-glide). Align the default Speed Dial panel's left edge to the trigger's left edge and place it below. Use a surface radius for stacked menu items. In accordions, let content change height while keeping the width fixed. In tabs, keep the rail in place when the panel content changes.
- **Gestures and settling.** [Swipe to Reveal](https://victormarques.dev/lab#v1c-swipe-to-reveal), [Reorderable List](https://victormarques.dev/lab#v1c-reorderable-list), and [Kinetic XY Pad](https://victormarques.dev/lab#v1c-kinetic-xy-pad). Preserve visible resting corners as content slides, preview the order before release, and attach a moving glow to the controlled handle.
