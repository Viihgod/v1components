# Snap rail

## Overview

Scrollable snap rail with an explicit listbox selection model and touch parity.

## Install/import

Use the [source bundle](../snippets/snap-rail.txt), then import the component from the extracted files.

## Anatomy

The listbox owns a horizontal or vertical scroll container and one option button per item.

## Props

items, value/defaultValue/onValueChange, orientation and selectOnHover define selection. Shared visual/motion props and disabled items are supported.

## Variants/states

Horizontal/vertical, selected, hover preview, disabled, empty, focus-visible and reduced-motion states are supported.

## Motion spec

Native scroll snap supplies spatial settling; selected styling transitions quickly and becomes instant with reduced motion.

## Accessibility

Arrow keys, Home and End work on option buttons; click and touch remain the primary activation fallback.

## Performance

The rail relies on native overflow and scroll snap rather than programmatic scroll loops, preventing layout thrash and scroll jump.

## Examples

Use item descriptions to provide additional visible context without relying on position.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 suites cover listbox semantics, keyboard, selectOnHover, empty state, zoom-safe layout and reduced motion.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-snap-rail)
- [Copyable source bundle](../snippets/snap-rail.txt)
- [Motion recording](../media/snap-rail.webm)
