# Rotary knob

## Overview

Radial slider for bounded pointer adjustment with a complete keyboard equivalent.

## Install/import

Use the [source bundle](../snippets/rotary-knob.txt), then import the component from the extracted files.

## Anatomy

The focusable slider root contains a decorative ring, indicator, and labelled value readout.

## Props

`value`/`defaultValue`, `onValueChange`, `min`, `max`, `step`, `startAngle`, `endAngle`, and `label` define the control. Native div attributes, `ViVisualProps`, and `ViMotionProps` are forwarded.

## Variants/states

Controlled/uncontrolled, bounded angle ranges, disabled, pointer-dragging, hover, focus-visible, and reduced-motion states are supported.

## Motion spec

The indicator uses a transform/angle CSS variable. Updates are direct and interruptible; reduced motion removes decorative interpolation.

## Accessibility

The root exposes `role=slider`, labelled min/max/now/text values, arrows, Home, and End. Pointer capture is released on blur, cancel, and unmount.

## Performance

Pointer values are snapped before publication and do not create a React animation loop or repeated layout reads.

## Examples

```tsx
<ViRotaryKnob label="Mix" min={0} max={1} step={0.01} defaultValue={0.5} />
```

## Portable source

Manifest `rotary-knob` includes the component, B04 manipulation helper, B04 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers arrows and clamping; E2E/axe/visual cover focus and rest states. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-rotary-knob)
- [Copyable source bundle](../snippets/rotary-knob.txt)
- [Motion recording](../media/rotary-knob.webm)
