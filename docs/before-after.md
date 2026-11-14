# Before after

## Overview

A native range comparison with a focus-visible divider between before and after panes.

## Install/import

Import `ViBeforeAfter` and `ViBeforeAfterProps` from `src/components/vicomponents/components`.

## Anatomy

Two decorative panes, labels, a divider, and one transparent native range input form the comparison.

## Props

`before`, `after`, `value`/`defaultValue`, `onValueChange`, `orientation`, `beforeLabel`, and `afterLabel` are supported with native input, visual, and motion props.

## Variants/states

Horizontal, vertical, rest, dragged, keyboard, controlled/uncontrolled, focus-visible, and reduced-motion states are explicit.

## Motion spec

The split is a percentage custom property and the panes use clipping only for presentation; focus outline remains outside the clipping layer.

## Accessibility

The input exposes a 0–1 native range with spoken percentage text. Arrow keys, Home, End, pointer and touch all update the same value.

## Performance

Range changes write one CSS variable and do not render per-frame child content; no portal, scroll lock, or layout measurement is used.

## Examples

```tsx
<ViBeforeAfter before={<BeforeImage />} after={<AfterImage />} onValueChange={setSplit} />
```

## Portable source

Manifest `before-after` includes the component, B05 drag helper, B05 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers controlled/uncontrolled range changes, orientation, labels, and reduced motion; E2E/axe/visual cover rest/hover/focus comparisons. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-before-after)
- [Copyable source bundle](../snippets/before-after.txt)
