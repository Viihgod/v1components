# Quantity stepper

## Overview

`ViQuantityStepper` combines a native number input with bounded increment/decrement buttons.

## Install/import

```tsx
import { ViQuantityStepper } from "@/components/vicomponents";
```

## Anatomy

The surface contains one form-serializable number input and two native buttons; controls are never nested.

## Props

`value`/`defaultValue` and `onValueChange` are numeric. `min`, `max`, `step`, `format`, `disabled`, all supported input attributes, visual/motion props and an input ref are available.

## Variants and states

Lower/upper limits disable the corresponding button; empty, invalid, focused, hover, pressed and disabled states use native input semantics.

## Motion spec

Button color and focus transitions use CSS only and become instant under reduced motion.

## Accessibility

The input exposes min/max/step and `aria-valuetext`; Arrow keys, Home and End mirror button actions.

## Performance

Values are clamped synchronously and no effect, timer or per-frame state is used.

## Examples

```tsx
<ViQuantityStepper name="seats" min={1} max={12} step={1} defaultValue={2} />
```

## Portable source

The manifest includes the component, shared B02 CSS and the Vi visual/surface files.

## Tests and provenance

Boundary, step, form serialization, keyboard and disabled coverage is in `b02-inputs.vitest.tsx`. Clean-room source ID: **17**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-quantity-stepper)
- [Copyable source bundle](../snippets/quantity-stepper.txt)
