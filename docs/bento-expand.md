# Bento expand

## Overview

Responsive grid of expandable tiles with local layout changes and no scroll-jump measurement.

## Install/import

Import ViBentoExpand from the V1Components components barrel.

## Anatomy

Each tile is an article with a native trigger and a labelled content region.

## Props

items, value/defaultValue/onValueChange, columns and expansionRatio define the grid. Disabled items and shared visual/motion props are supported.

## Variants/states

Collapsed/expanded, responsive columns, disabled, focus-visible, hover and reduced-motion states are available.

## Motion spec

Expansion uses grid placement plus a short opacity/translate entrance; reduced motion renders the final state.

## Accessibility

Arrow keys follow the grid, Home and End reach the edges, and Escape collapses the active tile.

## Performance

No ResizeObserver, per-frame state or pointer measurement is needed; dynamic content stays in its panel.

## Examples

Use item objects with labels, values and content.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 tests cover controlled state, grid keyboard behavior, empty content, dynamic panels and reduced motion.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-bento-expand)
- [Copyable source bundle](../snippets/bento-expand.txt)
