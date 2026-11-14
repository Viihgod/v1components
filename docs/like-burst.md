# Like burst

## Overview

`ViLikeBurst` is a compact reaction toggle with optional count and a short celebratory particle burst. Particles are decorative and bounded.

## Install/import

Use the [source bundle](../snippets/like-burst.txt), then import the component from the extracted files.
import { ViLikeBurst } from "@/components/vicomponents";
```

## Anatomy

The root is a native button with an icon slot, label, live count, and an aria-hidden particle layer. No nested interactive element is rendered.

## Props

`pressed`/`defaultPressed` and `onPressedChange` form the controlled/uncontrolled pair. `count` defaults to `0`, `particleCount` to `14`, `label` to `Like`, and `icon` is optional. Native button, visual, and motion props are forwarded.

## Variants and states

Rest, pressed, focus-visible, disabled, empty count, and finite burst states are supported.

## Motion spec

A pressed transition uses a small icon scale and a 420ms radial particle follow-through. Reduced motion preserves color/text state and removes particles.

## Accessibility

`aria-pressed` communicates the toggle state, the label remains stable, and the count is announced as a polite live value. Particles are hidden from assistive technology.

## Performance

Particle count is capped at 36 and the one cleanup timer is cancelled on unmount. No frame loop or per-frame React update is used.

## Examples

```tsx
<ViLikeBurst count={128} defaultPressed label="Like" />
```

## Portable source

Copy the component/CSS, shared action-feedback helper, and B00 core surface/visual files listed by the manifest.

## Tests and provenance

Controlled/uncontrolled, callback, disabled, reduced-motion and particle cleanup behavior is covered in `b01-action-feedback.vitest.tsx`. Clean-room source ID: **11**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-like-burst)
- [Copyable source bundle](../snippets/like-burst.txt)
- [Motion recording](../media/like-burst.webm)
