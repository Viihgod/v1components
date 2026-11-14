# Hover glow container

## Overview

Published compatibility entry for the Selected Work surface and its local pointer glow.

## Install/import

Use the public surface contract or open `/lab/hover-glow-container`; do not import the route's private implementation.

## Anatomy

The container has a native root, content slot and decorative glow/shine layers.

## Props

Shared visual props are supplemented by `hoverGlow` and `hoverGlowStrength`.

## States

Rest, pointer, focus-within, coarse-pointer and reduced-motion states retain the content and focus ring.

## Motion

Pointer coordinates update local CSS variables; reduced motion and coarse pointers use the static surface.

## Accessibility

Glow layers are hidden and focus-visible styling remains outside the content shape.

## Performance

The pointer effect is container-scoped and writes only CSS variables; no global cursor listener is installed.

## Example

Use the Selected Work cards on `/lab/hover-glow-container` as the reference example.

## Portable source

The manifest allowlists the visual props, surface component and surface CSS.

## Tests/provenance

Covered by core, Lab and visual checks. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-hover-glow-container)
- [Copyable source bundle](../snippets/hover-glow-container.txt)
