# Text input

## Overview

Published compatibility text field with native form behavior and validation copy.

## Install/import

Import the field from the public V1Components barrel or use `/lab/text-input`.

## Anatomy

The field has a visible label, optional icon, native input and helper/error message.

## Props

Use `label`, `placeholder`, `helperText`, `errorText`, `size`, `iconPosition`, `required`, `invalid` and `disabled` with shared visual props.

## States

Empty, filled, focused, invalid, required, disabled and reduced-motion states are explicit.

## Motion

Label and icon transitions are short and transform/opacity-based; reduced motion keeps the field static.

## Accessibility

The label and supporting message are associated with the native input and invalid state.

## Performance

No polling or per-frame React state is used; the input remains a native form control.

## Example

`<ViTextInput label="Project name" name="project" />`

## Portable source

The `text-input` manifest allowlists its component, CSS, visual props and surface contract.

## Tests/provenance

Covered by portable, Lab, axe and visual tests. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-text-input)
- [Copyable source bundle](../snippets/text-input.txt)
