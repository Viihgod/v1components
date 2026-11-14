# Swatch picker

## Overview

`ViSwatchPicker` exposes labeled color choices as a keyboard-ready radio grid.

## Install/import

```tsx
import { ViSwatchPicker } from "@/components/vicomponents";
```

## Anatomy

The grid contains native buttons with `aria-label`, a visible legend, and an optional hidden form field.

## Props

`colors` accepts strings or `{ value, label, color, disabled }`; `value`/`defaultValue`, `onValueChange`, `columns`, `name`, `disabled`, visual/motion props and a ref are supported.

## Variants and states

Selected, disabled, hover, focus-visible, custom column and reduced-motion states are supported.

## Motion spec

Selection uses CSS color transitions only; reduced motion removes the transition.

## Accessibility

Color is never the only label. Radio semantics, roving arrows, Home/End and touch activation are preserved.

## Performance

The grid uses one button per supplied color and no layout effects or pointer loops.

## Examples

```tsx
<ViSwatchPicker name="accent" colors={[{ value: "lime", label: "Lime", color: "#c3f36b" }]} />
```

## Portable source

The manifest includes the component, shared form helper/CSS and Vi visual/surface sources.

## Tests and provenance

Roving keyboard, disabled, labels, controlled state and form serialization coverage is in `b02-inputs.vitest.tsx`. Clean-room source ID: **30**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-swatch-picker)
- [Copyable source bundle](../snippets/swatch-picker.txt)
