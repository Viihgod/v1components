# Ripple feedback

## Overview

`ViRippleFeedback` confirms activation with a finite ripple originating at the pointer or keyboard center. It is feedback, not a loading indicator.

## Install/import

```tsx
import { ViRippleFeedback } from "@/components/vicomponents";
```

## Anatomy

One native button contains a decorative ripple layer and a content slot. The bounded layer clips the effect without clipping the root focus ring.

## Props

`children` is required. `color` defaults to the active token, `durationMs` to `420`, and `bounded` to `true`. `onRipple` receives `{ x, y, reducedMotion }`. Native button attributes, visual props, motion props, and refs are forwarded.

## Variants and states

Rest, pointer/touch ripple, keyboard ripple, focus-visible, disabled, bounded, and unbounded states are supported.

## Motion spec

The CSS ripple uses a 420ms ease-out scale/opacity sequence, capped at 1200ms. Reduced motion replaces spatial expansion with a 120ms discrete flash.

## Accessibility

The native button remains the only interactive element. Space/Enter feedback is centered and does not alter the accessible name.

## Performance

At most six transient nodes are retained and each timer is tracked for unmount cleanup. The effect animates transform and opacity only.

## Examples

```tsx
<ViRippleFeedback bounded={false} onRipple={(event) => console.log(event)}>
  Confirm
</ViRippleFeedback>
```

## Portable source

Use the manifest component/CSS, shared action-feedback helper, and B00 core surface/visual files. The allowlist contains every required file.

## Tests and provenance

Pointer, touch, keyboard, disabled, reduced-motion, cleanup and single-root coverage lives in `b01-action-feedback.vitest.tsx`. Clean-room source ID: **8**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-ripple-feedback)
- [Copyable source bundle](../snippets/ripple-feedback.txt)
