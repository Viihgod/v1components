# Push button

## Overview

`ViPushButton` communicates physical depth by moving the complete surface toward its resting shadow when pressed.

## Install/import

```tsx
import { ViPushButton } from "@/components/vicomponents";
```

## Anatomy

The root is one native button. Depth is a root shadow and root transform; no inner fill is transformed independently.

## Props

`children` is required. `depth` defaults to `8`px, `pressedDepth` to `2`px, and `disabled` to `false`. Native button attributes, visual props, motion props, and refs are supported.

## Variants and states

Rest, hover, pressed, focus-visible, and disabled states are available. Pointer, touch, Space, and Enter use the native button contract.

## Motion spec

The press uses a 120ms ease-out root translation and shadow reduction. Reduced motion keeps the state feedback without spatial translation.

## Accessibility

Native semantics and focus-visible behavior are retained; disabled is exposed through the native attribute.

## Performance

Only transform and shadow change during press. Depth is clamped to prevent excessive paint and layout-adjacent visual displacement.

## Examples

```tsx
<ViPushButton depth={8} pressedDepth={2}>Publish</ViPushButton>
```

## Portable source

Use the manifest component/CSS, shared helper, and B00 surface/visual files.

## Tests and provenance

Native root, ref, disabled and visual contract coverage is part of `b01-action-feedback.vitest.tsx`. Clean-room source ID: **13**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-push-button)
- [Copyable source bundle](../snippets/push-button.txt)
