# Inertial dial

## Overview

Vertical drag dial with a bounded, interruptible release settle.

## Install/import

Import `ViInertialDial` from `src/components/vicomponents/components`.

## Anatomy

The slider root contains a decorative ring/indicator and a labelled value readout.

## Props

`value`/`defaultValue`, `onValueChange`, `min`, `max`, `step`, `inertia`, and `damping` define the dial. `label`, native div attributes, visual props, and motion props are supported.

## Variants/states

Controlled/uncontrolled, dragging, settling, disabled, focus-visible, bounds, and reduced-motion states are exposed.

## Motion spec

Release applies one bounded settle update and a short state timeout; it is not a perpetual physics loop. Reduced motion skips the settle phase.

## Accessibility

The root is a labelled slider with min/max/now/text values and arrows, Home, and End. Blur and pointer cancel interrupt the settle safely.

## Performance

Pointer deltas use the latest event and a single cleanup timeout; transforms and CSS variables carry the visual response.

## Examples

```tsx
<ViInertialDial label="Temperature" min={10} max={40} step={0.5} inertia={0.4} />
```

## Portable source

Manifest `inertial-dial` includes the component, B04 helper, B04 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers arrows and cancellation; E2E/axe/visual cover rest/focus/reduced motion. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-inertial-dial)
- [Copyable source bundle](../snippets/inertial-dial.txt)
