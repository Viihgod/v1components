# Toggle pills

## Overview

`ViTogglePills` is a compact single-choice radio group.

## Install/import

```tsx
import { ViTogglePills } from "@/components/vicomponents";
```

## Anatomy

The visual pill group contains native buttons and a hidden form input when `name` is provided.

## Props

`items`, `value`/`defaultValue`, `onValueChange`, `label`, `name`, `disabled`, visual/motion props, native root attributes and a ref are supported.

## Variants and states

Selected, unselected, disabled, unavailable, focus-visible, hover and reduced-motion states are explicit.

## Motion spec

Selection color changes use the Vi fast duration and become discrete under reduced motion.

## Accessibility

The group uses radio semantics and roving arrow/Home/End focus; Enter/Space and touch activate the same path.

## Performance

There are no effects or timers; only the selected value and focus refs are retained.

## Examples

```tsx
<ViTogglePills items={["Day", "Week", "Month"]} name="range" defaultValue="Week" />
```

## Portable source

Copy the component, shared form helper/CSS and Vi visual/surface sources from the manifest.

## Tests and provenance

Controlled/uncontrolled, keyboard, disabled and form serialization coverage is in `b02-inputs.vitest.tsx`. Clean-room source ID: **27**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-toggle-pills)
- [Copyable source bundle](../snippets/toggle-pills.txt)
