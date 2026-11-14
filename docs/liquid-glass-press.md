# Liquid glass press

## Overview

`ViLiquidGlassPress` is a progressive glass action with bounded material intensity and distortion controls.

## Install/import

Use the [source bundle](../snippets/liquid-glass-press.txt), then import the component from the extracted files.
import { ViLiquidGlassPress } from "@/components/vicomponents";
```

## Anatomy

One native button contains a decorative sheen and a content slot. The focus ring belongs to the root and remains outside the material.

## Props

`children` is required. `intensity` defaults to `0.72`, `distortion` to `0.24`, and `disabled` to `false`. `glass` defaults to true for the material while all visual, motion, native, and ref props remain available.

## Variants and states

Rest, hover, pressed, focus-visible, disabled, reduced motion, and no-backdrop-filter fallback states are supported.

## Motion spec

Press feedback uses a 120ms root scale. Reduced motion removes that scale; the material itself is static and does not create a continuous loop.

## Accessibility

The material is decorative and progressive. Text remains readable without backdrop-filter, and native keyboard/touch semantics are preserved.

## Performance

Intensity/distortion are clamped, blur is bounded, and there are no pointer loops or timers. Consumers should avoid stacking many glass layers.

## Examples

```tsx
<ViLiquidGlassPress intensity={0.6} distortion={0.18}>Open</ViLiquidGlassPress>
```

## Portable source

Use the manifest component/CSS, shared helper, and B00 core surface/visual files. The CSS includes a no-filter fallback.

## Tests and provenance

Single native root, disabled, focus, reduced-motion and progressive material coverage is in `b01-action-feedback.vitest.tsx`. Clean-room source ID: **40**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-liquid-glass-press)
- [Copyable source bundle](../snippets/liquid-glass-press.txt)
- [Motion recording](../media/liquid-glass-press.webm)
