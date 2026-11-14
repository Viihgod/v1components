# Star rating

## Overview

`ViStarRating` is a clearable, controlled-or-uncontrolled rating group.

## Install/import

```tsx
import { ViStarRating } from "@/components/vicomponents";
```

## Anatomy

The root owns the visual contract and contains a radiogroup of native buttons. One button is in the tab order; no button is nested in another button.

## Props

`value`/`defaultValue` and `onValueChange` use `number | null`; `max` defaults to 5. `allowClear`, `readOnly`, `labels`, `ViVisualProps`, `ViMotionProps`, native root attributes and a div ref are supported.

## Variants and states

Empty, selected, hover, focus-visible, clearable, read-only and reduced-motion states are represented without color alone.

## Motion spec

CSS color and scale transitions use the fast Vi duration. Reduced motion disables spatial transitions.

## Accessibility

Radio semantics expose the selected value. Arrow/Home/End move the roving focus and Enter/Space activate it; the accessible label can be supplied per star.

## Performance

The component renders at most 20 buttons, stores no pointer coordinates and has no timers or effects.

## Examples

```tsx
<ViStarRating defaultValue={4} allowClear onValueChange={saveRating} />
```

## Portable source

The manifest includes the component, `form-input-utils.ts`, shared B02 CSS and the Vi visual/surface files.

## Tests and provenance

Keyboard, controlled/uncontrolled, clear/read-only and reduced-motion coverage is in `tests/vicomponents/b02-inputs.vitest.tsx`. Clean-room source ID: **14**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-star-rating)
- [Copyable source bundle](../snippets/star-rating.txt)
- [Motion recording](../media/star-rating.webm)
