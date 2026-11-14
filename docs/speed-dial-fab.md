# Speed dial fab

## Overview

Floating action trigger that opens a touch- and keyboard-friendly menu.

## Install/import

Use the [source bundle](../snippets/speed-dial-fab.txt), then import the component from the extracted files.

## Anatomy

A native FAB trigger controls a menu of native menuitem buttons.

## Props

actions, open/defaultOpen/onOpenChange, placement and label define the menu. Action objects may carry value, icon, disabled and onSelect.

## Variants/states

Four placements, open/closed, empty, disabled, focus-visible and reduced-motion states are supported.

## Motion spec

The trigger uses a 120ms press scale; menu placement is instantaneous under reduced motion.

## Accessibility

The trigger exposes aria-haspopup and aria-expanded. Arrow keys, Home, End and Escape work without hover.

## Performance

Actions are static CSS-positioned content; no pointer tracking or portal measurement is required.

## Examples

Provide actions as strings for simple commands or objects for labels and callbacks.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 suites cover opening, action selection, keyboard/touch, focus restoration, axe and visual states.

## Release behavior

The default popup opens below the trigger, with both left edges aligned. Use the placement prop to change the alignment and vertical side. Outside pointer input and Escape close the popup.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-speed-dial-fab)
- [Copyable source bundle](../snippets/speed-dial-fab.txt)
- [Motion recording](../media/speed-dial-fab.webm)
