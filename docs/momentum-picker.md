# Momentum picker

## Overview

Finite listbox with roving focus, arrows, click selection, and a short touch-swipe affordance.

## Install/import

Import `ViMomentumPicker` and `ViManipulationItem` from `src/components/vicomponents/components`.

## Anatomy

The listbox contains a bounded visible window and option elements; the selection window is visual only.

## Props

`items`, `value`/`defaultValue`, `onValueChange`, `visibleCount`, `wrap`, and `label` define selection. Items can provide `id`, `value`, `content`, and `disabled`; visual and motion props are forwarded.

## Variants/states

Controlled/uncontrolled, selected, disabled, empty, wrapped/non-wrapped, pointer swipe, hover, focus-visible, and reduced-motion states are covered.

## Motion spec

Selection changes use a bounded CSS transform/opacity treatment only. Reduced motion keeps the listbox and option states static.

## Accessibility

The root is a labelled listbox with option semantics and roving tabindex. Arrows, Home, End, Enter, and Space work without a hover-only path.

## Performance

Options are rendered once per item; no scroll locking or RAF physics loop is used. Pointer capture is cleared after every swipe or cancellation.

## Examples

```tsx
<ViMomentumPicker label="Quality" items={["Low", "Medium", "High"]} defaultValue="Medium" />
```

## Portable source

Manifest `momentum-picker` includes the component, B04 helper, B04 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers pointer swipe, empty state, and selection; E2E/axe/visual cover options, focus, and reduced motion. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-momentum-picker)
- [Copyable source bundle](../snippets/momentum-picker.txt)
