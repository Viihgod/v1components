# Badge counter

## Overview

`ViBadgeCounter` pairs a readable label with a capped count in a compact native action.

## Install/import

```tsx
import { ViBadgeCounter } from "@/components/vicomponents";
```

## Anatomy

The root is a native button with a label slot and a polite live count slot. No nested button is used.

## Props

`count` is required. `max` defaults to `99`, `label` to `Notifications`, and `onActivate` is optional. Native, visual, motion, and ref props are supported.

## Variants and states

Zero, positive, capped (`99+`), hover, pressed, focus-visible, and disabled states are supported.

## Motion spec

Press feedback uses a 120ms root scale and reduced motion removes the scale while retaining the state change.

## Accessibility

The accessible name combines label and formatted count; the count is a polite live value and does not rely on color.

## Performance

Formatting is derived during render, values are clamped, and there are no effects or timers.

## Examples

```tsx
<ViBadgeCounter count={128} max={99} label="Updates" onActivate={openUpdates} />
```

## Portable source

Copy the manifest component/CSS, shared helper, and B00 core surface/visual files.

## Tests and provenance

Count formatting, native focus, disabled and visual state coverage is in `b01-action-feedback.vitest.tsx`. Clean-room source ID: **83**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-badge-counter)
- [Copyable source bundle](../snippets/badge-counter.txt)
