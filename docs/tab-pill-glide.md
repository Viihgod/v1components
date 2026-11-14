# Tab pill glide

## Overview

Compact tablist with a CSS glide treatment and explicit automatic/manual activation.

## Install/import

Import ViTabPillGlide from the V1Components components barrel.

## Anatomy

The list is a tablist of native buttons and the selected item maps to a tabpanel.

## Props

items, value/defaultValue/onValueChange, orientation and activationMode define the tab contract. Disabled items and all shared visual/motion props are supported.

## Variants/states

Horizontal/vertical, automatic/manual, selected, disabled, hover, focus-visible and reduced-motion states are covered.

## Motion spec

Selection uses a 120ms color/background transition; reduced motion keeps the selected fill without interpolation.

## Accessibility

Roving tabindex, Arrow keys, Home, End and manual Enter/Space activation follow the tab pattern.

## Performance

Only the active tab value is stored; no layout measurement or pointer loop is required.

## Examples

Supply items with label, value and optional content for the tabpanel.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 Vitest/E2E/axe/visual suites cover keyboard, controlled state and reduced motion.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-tab-pill-glide)
- [Copyable source bundle](../snippets/tab-pill-glide.txt)
- [Motion recording](../media/tab-pill-glide.webm)
