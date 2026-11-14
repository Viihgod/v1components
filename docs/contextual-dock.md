# Contextual dock

## Overview

Contextual toolbar with local magnification that supplements native navigation.

## Install/import

Import ViContextualDock from the V1Components components barrel.

## Anatomy

A labelled toolbar contains native buttons, optional icons and presentational labels.

## Props

items, value, onSelect, magnification, influenceRadius and label define content and visual influence. Shared visual/motion props are supported.

## Variants/states

Selected, hover, focus-visible, disabled, empty and reduced-motion states are explicit.

## Motion spec

Neighbor and active scale use compositor-friendly transforms over 120ms; reduced motion uses a static scale.

## Accessibility

Every item has a text label and aria-pressed state. Magnification never replaces keyboard or touch activation.

## Performance

CSS hover/focus handles the local effect; there is no React state per pointer event and no resize observer.

## Examples

Pass strings for a simple dock or objects with value, icon and disabled.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 suites cover toolbar semantics, callbacks, keyboard/touch and reduced motion.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-contextual-dock)
- [Copyable source bundle](../snippets/contextual-dock.txt)
