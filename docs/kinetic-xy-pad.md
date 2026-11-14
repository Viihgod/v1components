# Kinetic xy pad

## Overview

Bounded two-axis pointer surface with a keyboard-operable thumb and optional return-to-center.

## Install/import

Use the [source bundle](../snippets/kinetic-xy-pad.txt), then import the component from the extracted files.

## Anatomy

The group owns the grid and pointer surface; one labelled slider thumb exposes the x coordinate and spoken x/y text.

## Props

`value`/`defaultValue`, `onValueChange`, `bounds`, `returnToCenter`, `keyboardStep`, and `label` define the interaction. Children, visual props, motion props, and native group attributes are supported.

## Variants/states

Controlled/uncontrolled, pointer drag, keyboard arrows/Home/End, disabled, return-to-center, focus-visible, and reduced-motion states are supported.

## Motion spec

Thumb position uses percentage transforms; return-to-center is a single bounded update. Reduced motion leaves coordinates functional and removes decorative transition easing.

## Accessibility

The labelled group contains a `role=slider` thumb. Keyboard movement mirrors pointer movement; the pad alone receives `touch-action` so surrounding page scroll remains available.

## Performance

Pointer coordinates are clamped directly from the current surface rect, with pointer capture released on blur, cancel, and unmount.

## Examples

```tsx
<ViKineticXyPad label="Pan and tilt" returnToCenter onValueChange={setPanTilt} />
```

## Portable source

Manifest `kinetic-xy-pad` includes the component, B04 helper, B04 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers keyboard parity and bounds; E2E/axe/visual cover the labelled thumb and focus state. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-kinetic-xy-pad)
- [Copyable source bundle](../snippets/kinetic-xy-pad.txt)
- [Motion recording](../media/kinetic-xy-pad.webm)
