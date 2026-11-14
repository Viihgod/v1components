# Button

## Overview

Published compatibility action primitive with native button semantics.

## Install/import

Import the button from the public V1Components barrel or use `/lab/button`.

## Anatomy

The native button contains an optional icon, label and bounded surface/focus layers.

## Props

Use `label`, `variant`, `size`, `icon`, `iconPosition`, `bordered`, `loading` and `disabled` with shared visual props.

## States

Rest, hover, pressed, loading, disabled, focus-visible and reduced-motion states are supported.

## Motion

Press feedback uses transform/opacity and stops when reduced motion is active.

## Accessibility

The native button is keyboard-operable; icon-only usage requires an accessible `label`.

## Performance

The component renders one bounded decorative layer and has no per-frame React updates.

## Example

`<ViButton label="Explore work" icon="arrow" />`

## Portable source

The `button` manifest allowlists its component, CSS, visual props and surface contract.

## Tests/provenance

Covered by core, portable, Lab, axe and visual tests. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-button)
- [Copyable source bundle](../snippets/button.txt)
