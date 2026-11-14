# Command palette bloom

## Overview

Filterable command dialog with a global shortcut, native search input and focus restoration.

## Install/import

Use the [source bundle](../snippets/command-palette-bloom.txt), then import the component from the extracted files.

## Anatomy

A native trigger opens a labelled dialog containing a search combobox and listbox options.

## Props

items, open/defaultOpen/onOpenChange, onSelect, shortcut and placeholder define the palette. Shared visual/motion props are supported.

## Variants/states

Closed/open, filtered/no-match, selected, disabled, shortcut and reduced-motion states are explicit.

## Motion spec

The dialog uses a modest 220ms entrance and no animated measurement; reduced motion keeps the dialog deterministic.

## Accessibility

Input typing remains native; Arrow keys, Home, End, Enter and Escape are supported. Closing restores focus to the trigger.

## Performance

One document key listener is installed only for the instance and removed on unmount. Filtering is synchronous and local.

## Examples

Supply labels, values and optional descriptions; command callbacks receive the stable value.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 tests cover shortcut, controlled open, filtering, selection, Escape/focus return, axe and visual open states.

## Release behavior

The trigger uses symmetric block padding and centers the title and shortcut. The result list uses compact vertical spacing.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-command-palette-bloom)
- [Copyable source bundle](../snippets/command-palette-bloom.txt)
- [Motion recording](../media/command-palette-bloom.webm)
