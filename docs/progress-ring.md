# Progress ring

## Overview

A determinate circular progress indicator for compact dashboards and completion summaries.

## Install / import

```tsx
import { ViProgressRing } from "@/components/vicomponents/components/progress-ring";
```

## Anatomy

The fixed-size root is a labelled progressbar containing a decorative SVG track/progress pair and a visible formatted value.

## Props

`value` defaults to `0`, `max` to `100`, `size` to `84`, and `strokeWidth` to `8`. `label` is required. `format(value, max)` controls the visible and announced value. Visual/motion props, native div attributes and ref are forwarded.

## Variants and states

Supports zero, partial, complete, overflow-clamped and custom-format states. Geometry is clamped so excessive stroke width cannot invert the ring.

## Motion spec

Only SVG `stroke-dashoffset` transitions, using the progress duration/ease tokens. Reduced motion makes the state change immediate.

## Accessibility

Uses progressbar min/max/now/value text. SVG is hidden from assistive technology and the center text mirrors the announced value.

## Performance

The footprint is explicit, avoiding layout shift across sizes. No measurement, timer, RAF or external dependency is used.

## Examples

```tsx
<ViProgressRing label="Project completion" value={72} />
<ViProgressRing label="Files" value={3} max={5} size={112} strokeWidth={10} format={(v, m) => `${v}/${m}`} />
```

## Portable source

The manifest allowlists the ring, B07 helper/CSS and Vi visual files.

## Tests and provenance

Vitest covers clamp and label semantics; E2E/axe/visual cover fixed geometry, zoom-safe focus and reduced motion. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-progress-ring)
- [Copyable source bundle](../snippets/progress-ring.txt)
- [Motion recording](../media/progress-ring.webm)
