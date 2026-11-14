# Focus relay

## Overview

Compact roving focus group that relays the active value without pointer tracking.

## Install/import

Use the [source bundle](../snippets/focus-relay.txt), then import the component from the extracted files.

## Anatomy

A labelled tablist contains one native button per focus target.

## Props

items, value/defaultValue/onValueChange, padding and orientation define the group. Disabled items and shared visual/motion props are supported.

## Variants/states

Horizontal/vertical, active, disabled, hover, focus-visible and reduced-motion states are covered.

## Motion spec

Selection uses a short color transition; reduced motion keeps the active surface with no interpolation.

## Accessibility

Roving tabindex plus Arrow keys, Home and End keeps tab order efficient and predictable.

## Performance

Only focus and selected value are stored; no layout reads or pointer loops run.

## Examples

Use stable item values when focus targets are controlled by a parent.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 tests cover controlled/uncontrolled selection, keyboard traversal, disabled items and reduced motion.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-focus-relay)
- [Copyable source bundle](../snippets/focus-relay.txt)
- [Motion recording](../media/focus-relay.webm)
