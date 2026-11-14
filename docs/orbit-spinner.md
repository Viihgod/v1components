# Orbit spinner

## Overview

An indeterminate orbit used when work has no meaningful finite percentage. The accessible label remains useful when the orbit is frozen.

## Install / import

```tsx
import { ViOrbitSpinner } from "@/components/vicomponents/components/orbit-spinner";
```

## Anatomy

A labelled status contains a decorative orbit and a static core. The optional `active` prop and shared `paused` prop control the loop.

## Props

`size` accepts `sm`, `md`, `lg` or a number; `speed` is a duration in milliseconds and defaults to `1400`. `label` is required. `active` defaults to `true`; visual/motion props, native span attributes and ref are forwarded.

## Variants and states

Supports active, paused, inactive, hidden-document and reduced-motion states. The core remains visible without animation.

## Motion spec

One transform-only linear orbit communicates indeterminate progress. It pauses on `paused`, `document.hidden`, inactive state and reduced motion; no GSAP timeline is needed.

## Accessibility

Uses a labelled polite status. Orbit and core are decorative and do not create extra focus targets.

## Performance

The single pseudo-layer uses compositor-friendly rotation and no React timer/RAF. The document visibility subscription is cleaned up on unmount.

## Examples

```tsx
<ViOrbitSpinner label="Loading workspace" />
<ViOrbitSpinner label="Sync paused" active={false} motion="none" />
```

## Portable source

Manifest files are limited to the spinner, B07 helper/CSS, visual config and surface contract.

## Tests and provenance

Vitest checks paused static state; E2E/axe/visual cover label, reduced motion and size. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-orbit-spinner)
- [Copyable source bundle](../snippets/orbit-spinner.txt)
- [Motion recording](../media/orbit-spinner.webm)
