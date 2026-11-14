# V1Components motion

- Hover starts at the pointer entry and stays inside the resting shape. Use the same origin for fill and border and ease out when the pointer leaves.
- Confirmations start at the icon that received input. Only a meaningful milestone, such as five stars, lights the full control.
- Keep the interaction geometry stable through the transition. Disclosures may expand down while siblings and control widths remain stable.
- Prefer transform and opacity for lightweight changes. Reuse the shared hover handler and existing tokens before adding a timeline.
- Honor reduced motion, keyboard input, and cancellation. Preserve readable static state after every animation.
