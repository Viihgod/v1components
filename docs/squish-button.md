# Squish button

## Overview

`ViSquishButton` adds a restrained two-axis press squash to the complete action surface.

## Install/import

```tsx
import { ViSquishButton } from "@/components/vicomponents";
```

## Anatomy

The native button root owns the transform, border, fill, radius, and focus contract together.

## Props

`children` is required. `pressScaleX` defaults to `0.96`, `pressScaleY` to `0.92`, and `disabled` to `false`. Native, visual, motion, and ref props are supported.

## Variants and states

Rest, hover, pressed, focus-visible, and disabled states are supported across pointer, touch, and keyboard activation.

## Motion spec

Press feedback is a 120ms transform transition. Reduced motion keeps the interaction event and visual state without scaling.

## Accessibility

No custom keyboard handler is needed: native button semantics provide Space/Enter parity and focus visibility.

## Performance

Only scale transforms are animated. Values are clamped to avoid extreme distortion and there are no timers or listeners.

## Examples

```tsx
<ViSquishButton pressScaleX={0.97} pressScaleY={0.94}>Save</ViSquishButton>
```

## Portable source

Use the manifest component/CSS, shared helper, and B00 core surface/visual files.

## Tests and provenance

Native root, disabled, focus and reduced-motion coverage is in `b01-action-feedback.vitest.tsx`. Clean-room source ID: **26**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-squish-button)
- [Copyable source bundle](../snippets/squish-button.txt)
