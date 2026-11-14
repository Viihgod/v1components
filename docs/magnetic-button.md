# Magnetic button

## Overview

`ViMagneticButton` gives a nearby pointer a small invitation response. It is an action primitive, not a replacement for focus, hover, or a drag gesture.

## Install/import

```tsx
import { ViMagneticButton } from "@/components/vicomponents";
```

## Anatomy

The root is one native `<button>` rendered through `ViComponentSurface`. Pointer displacement is applied to that root; the focus ring remains outside it.

## Props

`children` is required. `strength` defaults to `0.35`, `activationRadius` to `120`, `deadZone` to `12`, and `disabled` to `false`. It accepts all native button attributes, `ViVisualProps`, and `ViMotionProps`; `ref` targets the button.

## Variants and states

Rest, nearby pointer, pressed, focus-visible, and disabled are supported. Touch and keyboard activation keep the native button behavior.

## Motion spec

CSS transform variables provide a bounded translation with a 220ms ease-out settle. No React state is written per pointer frame. `motion="none"` and reduced motion remove displacement.

## Accessibility

The native name, Space/Enter activation, disabled semantics, and focus-visible ring are preserved. Pointer motion is decorative only.

## Performance

The hot path writes two transform variables on the existing root and uses `will-change: transform` only on this animated control. No timers or listeners outlive unmount.

## Examples

```tsx
<ViMagneticButton strength={0.28} activationRadius={140}>Explore</ViMagneticButton>
```

## Portable source

Copy the manifest files for the component, `action-feedback-utils.ts`, `visual-props.ts`, `vi-component-surface.tsx`, and their CSS. No private alias is required.

## Tests and provenance

Covered by `tests/vicomponents/b01-action-feedback.vitest.tsx` for ref/native root, pointer reset, disabled and reduced motion. Clean-room behavior reference: component catalog card **2**; implementation source ID: `2`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-magnetic-button)
- [Copyable source bundle](../snippets/magnetic-button.txt)
