# Segment loader

## Overview

A finite segmented progress indicator for staged preparation. The count is capped so an accidental large input cannot create an unbounded DOM.

## Install / import

```tsx
import { ViSegmentLoader } from "@/components/vicomponents/components/segment-loader";
```

## Anatomy

The root is a labelled progressbar with a text fraction and an ordered segment track.

## Props

`count` defaults to `5` and is clamped to 1-32. `value` defaults to `0` and clamps to the count. `active` defaults to `true`; `label` is required. Visual/motion props, native attributes and a ref are forwarded.

## Variants and states

Supports empty, partial, complete and inactive tracks. It does not invent an indeterminate value when `active` is false.

## Motion spec

Filled segments settle with a short transform/color transition. Reduced motion leaves the selected segments static.

## Accessibility

Uses progressbar semantics with numeric min/max/now and a visible fraction. Segment spans are `aria-hidden` because they duplicate the text value.

## Performance

The bounded 32-segment limit keeps layout predictable. There are no timers, observers or per-frame state updates.

## Examples

```tsx
<ViSegmentLoader label="Preparing files" count={6} value={4} />
<ViSegmentLoader label="Loading" count={3} value={0} active={false} />
```

## Portable source

The explicit manifest includes the component, shared B07 helper/CSS and Vi visual files only.

## Tests and provenance

Vitest covers count/value bounds; E2E, axe and visual suites cover the published route. Clean-room reimplementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-segment-loader)
- [Copyable source bundle](../snippets/segment-loader.txt)
