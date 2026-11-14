# Color picker

## Overview

Published color field with a native input path and curated swatches.

## Install/import

Use the [source bundle](../snippets/color-picker.txt), then import the component from the extracted files.

## Anatomy

The picker has a labelled trigger, editable color value, swatch grid and optional popover.

## Props

Use `label`, `defaultValue`, `showInput`, `showSwatches`, `closeOnSelect`, `size` and `disabled` with shared visual props.

## States

Closed, open, valid, invalid, selected, disabled, focus-visible and reduced-motion states are supported.

## Motion

Popover and selection transitions use bounded opacity/transform; reduced motion keeps the value and controls static.

## Accessibility

The editable value and swatches have readable labels, and the native color path remains available.

## Performance

The swatch set is bounded and color updates do not start a polling or animation loop.

## Example

`<ViColorPicker label="Accent color" defaultValue="#c3f36b" />`

## Portable source

The `color-picker` manifest allowlists its component, utility, CSS, visual props and surface contract.

## Tests/provenance

Covered by portable, Lab, axe and visual tests. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-color-picker)
- [Copyable source bundle](../snippets/color-picker.txt)
- [Motion recording](../media/color-picker.webm)
