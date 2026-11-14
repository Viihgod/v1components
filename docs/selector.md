# Selector

## Overview

Published single- or multi-value selector with matching native option semantics.

## Install/import

Use the [source bundle](../snippets/selector.txt), then import the component from the extracted files.

## Anatomy

The group has a visible label, option controls, optional checkbox affordances and selected state.

## Props

Use `label`, `defaultValue`, `selectionMode`, `showCheckbox`, `hoverStyle`, `size` and `disabled` with shared visual props.

## States

Empty, selected, multi-selected, disabled, focus-visible and reduced-motion states are explicit.

## Motion

Selection feedback is a short fill/opacity transition and becomes static under reduced motion.

## Accessibility

Radio or checkbox semantics match the selection mode, and selected state is not conveyed by color alone.

## Performance

Options are rendered in caller order with bounded decorative layers and no per-frame updates.

## Example

`<ViSelector label="Capabilities" selectionMode="multiple" />`

## Portable source

The `selector` manifest allowlists the component, state helper, CSS, visual props and surface contract.

## Tests/provenance

Covered by portable, Lab, axe and visual tests. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-selector)
- [Copyable source bundle](../snippets/selector.txt)
- [Motion recording](../media/selector.webm)
