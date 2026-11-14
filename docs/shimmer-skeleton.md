# Shimmer skeleton

## Overview

A bounded set of skeleton lines for content placeholders. Widths are stable so loading does not cause a layout surprise.

## Install / import

```tsx
import { ViShimmerSkeleton } from "@/components/vicomponents/components/shimmer-skeleton";
```

## Anatomy

The labelled status root renders up to twelve decorative line slots with caller-controlled widths.

## Props

`lines` defaults to `3` and clamps to 1-12. `widths` accepts pixel/percentage/CSS values; unspecified lines use deterministic presets. `radius` accepts a number or `sm`/`md`/`lg`. `active` defaults true and `label` is required. Visual/motion/native div props and ref are forwarded.

## Variants and states

Supports active shimmer, frozen skeleton, zero-width fallback, reduced motion and hidden-document states.

## Motion spec

A single translated pseudo-element is stagger-free and compositor-friendly. Reduced motion preserves the solid skeleton without sweep.

## Accessibility

The root is one polite labelled status with `aria-busy`; each line is decorative and hidden from assistive technology.

## Performance

Line count is bounded and no JS animation loop exists. The visibility subscription pauses CSS animation while the document is hidden.

## Examples

```tsx
<ViShimmerSkeleton label="Loading profile" lines={4} widths={["90%", "72%", "64%", "36%"]} />
```

## Portable source

Only the skeleton component, B07 helper/CSS and Vi visual source are allowlisted.

## Tests and provenance

Vitest covers bounded lines and static inactive state; E2E/axe/visual cover reduced motion and dimensions. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-shimmer-skeleton)
- [Copyable source bundle](../snippets/shimmer-skeleton.txt)
- [Motion recording](../media/shimmer-skeleton.webm)
