# Rubber band slider

## Overview

Native range input with deterministic clamping and a tokenized resistance cue.

## Install/import

Use the [source bundle](../snippets/rubber-band-slider.txt), then import the component from the extracted files.

## Anatomy

One native `input[type=range]` owns the value, form attributes, and browser keyboard behavior.

## Props

`value`/`defaultValue`, `onValueChange`, `min`, `max`, `step`, `resistance`, and `orientation` are supported. Native input attributes plus `ViVisualProps` and `ViMotionProps` are forwarded.

## Variants/states

Horizontal/vertical, controlled/uncontrolled, disabled, hover, focus-visible, pressed, and reduced-motion states are supported.

## Motion spec

The progress track uses a transform-friendly tokenized fill; resistance is bounded to `0..1`. No drag animation is required for the value contract.

## Accessibility

Native range semantics provide arrows, Home/End, name, min/max, step, and form participation. `aria-orientation` mirrors the orientation prop.

## Performance

Value updates happen only on native change events; no per-frame React loop or layout measurement is used.

## Examples

```tsx
<ViRubberBandSlider aria-label="Opacity" min={0} max={1} step={0.01} defaultValue={0.8} />
```

## Portable source

Manifest `rubber-band-slider` includes the component, B04 helper, B04 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers native change and bounds; E2E/axe/visual cover keyboard, focus, and reduced motion. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-rubber-band-slider)
- [Copyable source bundle](../snippets/rubber-band-slider.txt)
- [Motion recording](../media/rubber-band-slider.webm)
