# Dropdown

## Overview

Published compatibility single-value menu with native keyboard interaction.

## Install/import

Use the [source bundle](../snippets/dropdown.txt), then import the component from the extracted files.

## Anatomy

The control has a labelled trigger, active option list, selection indicator and dismissal path.

## Props

Use `label`, `placeholder`, `defaultValue`, `hoverStyle`, `size` and `disabled` with shared visual props.

## States

Closed, open, selected, disabled, focus-visible and reduced-motion states are supported.

## Motion

The list uses a bounded opacity/position transition; reduced motion changes visibility without travel.

## Accessibility

Arrow, Home, End, Enter and Escape keys are supported with combobox/listbox semantics.

## Performance

Only the active option list is rendered as an overlay; no global pointer loop is used.

## Example

`<ViDropdown label="Discipline" placeholder="Select a discipline" />`

## Portable source

The `dropdown` manifest allowlists its component, CSS, visual props and surface contract.

## Tests/provenance

Covered by portable, Lab, axe and visual tests. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-dropdown)
- [Copyable source bundle](../snippets/dropdown.txt)
- [Motion recording](../media/dropdown.webm)
