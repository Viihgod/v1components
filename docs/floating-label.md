# Floating label

## Overview

`ViFloatingLabel` keeps a native input and floats its associated label only while focused or filled.

## Install/import

```tsx
import { ViFloatingLabel } from "@/components/vicomponents";
```

## Anatomy

An outer visual field contains an input, optional decorative leading/trailing slots, and a real `label`/`htmlFor` pair.

## Props

`label` is required. All normal input attributes, `invalid`, `errorMessage`, `leadingIcon`, `trailingIcon`, `ViVisualProps`, `ViMotionProps` and an input ref are supported.

## Variants and states

Empty, filled, focused, invalid, required, disabled, autofilled and placeholder states keep the native input as the source of truth.

## Motion spec

The label uses a short transform/color transition. The reduced-motion media query makes it discrete.

## Accessibility

The label is associated by ID, `aria-invalid` is forwarded, and an error message is linked with `aria-describedby`.

## Performance

Only focus and value mirrors are local state; browser autofill and native validation remain intact.

## Examples

```tsx
<ViFloatingLabel label="Email" type="email" autoComplete="email" invalid={hasError} errorMessage="Use a valid email." />
```

## Portable source

Copy the manifest component, shared B02 CSS and the Vi visual/surface files.

## Tests and provenance

Label association, invalid state, native attributes and hydration-safe initial rendering are covered by `b02-inputs.vitest.tsx`. Clean-room source ID: **15**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-floating-label)
- [Copyable source bundle](../snippets/floating-label.txt)
