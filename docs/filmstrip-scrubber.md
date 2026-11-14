# Filmstrip scrubber

## Overview

Frame-index scrubber with an accessible timestamp, decorative thumbnails, and an explicit empty state.

## Install/import

Import `ViFilmstripScrubber` from `src/components/vicomponents/components`.

## Anatomy

The surface contains the current frame, a decorative thumbnail rail, and one native range input.

## Props

`frames`, `value`/`defaultValue`, `onValueChange`, `renderFrame`, `getTimestamp`, and `label` are supported. `disabled`, `onChange`, native input attributes, visual props, and motion props are forwarded.

## Variants/states

Populated, empty, controlled/uncontrolled, disabled, selected frame, focus-visible, and reduced-motion states are explicit.

## Motion spec

Frame progress is a CSS percentage and does not animate React content per frame. Reduced motion disables decorative transitions while preserving the native range.

## Accessibility

The range is labelled and exposes a live timestamp; the thumbnail rail is `aria-hidden` and never adds duplicate interactive controls. Empty frames disable the range.

## Performance

Only the active frame is rendered in the live region; frame thumbnails remain presentational and no layout measurement loop is used.

## Examples

```tsx
<ViFilmstripScrubber label="Preview" frames={frames} getTimestamp={(_, i) => `${i / 30}s`} />
```

## Portable source

Manifest `filmstrip-scrubber` includes the component, B04 helper, B04 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers empty and native range behavior; E2E/axe/visual cover populated rest/focus states. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-filmstrip-scrubber)
- [Copyable source bundle](../snippets/filmstrip-scrubber.txt)
