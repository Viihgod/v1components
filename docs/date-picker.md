# Date picker

## Overview

Published keyboard-ready calendar field with deterministic date formatting.

## Install/import

Use the [source bundle](../snippets/date-picker.txt), then import the component from the extracted files.

## Anatomy

The control has a labelled trigger, month navigation, calendar grid, selected day and clear action.

## Props

Use `label`, `placeholder`, `defaultValue`, `locale`, `weekStartsOn`, `showOutsideDays`, `clearable`, `closeOnSelect`, `size` and `disabled`.

## States

Closed, open, selected, empty, disabled, focused day, invalid input and reduced-motion states are explicit.

## Motion

Calendar entry uses a bounded transition; reduced motion preserves the same DOM and focus behavior without travel.

## Accessibility

Arrow, Home, End, PageUp, PageDown, Enter, Space and Escape keyboard paths are available with labelled days.

## Performance

The calendar has a fixed 42-cell grid; focus scheduling is one-shot and cancelled on unmount.

## Example

`<ViDatePicker label="Due date" name="dueDate" locale="en-US" />`

## Portable source

The `date-picker` manifest allowlists its component, date utilities, CSS, visual props and surface contract.

## Tests/provenance

Covered by utility, portable, Lab, axe and visual tests. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-date-picker)
- [Copyable source bundle](../snippets/date-picker.txt)
- [Motion recording](../media/date-picker.webm)
