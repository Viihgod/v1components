# Orbital action menu

## Overview

Radial action menu whose orbital placement is a decorative transform around a native menu.

## Install/import

Import ViOrbitalActionMenu from the V1Components components barrel.

## Anatomy

The trigger owns open state; a menu contains one button per action and uses CSS custom properties for angle and radius.

## Props

actions, open/defaultOpen/onOpenChange, radius, startAngle and label define the public API.

## Variants/states

Open/closed, custom radius/angle, empty, disabled, focus-visible and reduced-motion states are available.

## Motion spec

Buttons settle with a 220ms transform; reduced motion keeps actions visible at their final positions.

## Accessibility

Menuitems remain reachable by arrows, Home, End and Escape even though visual placement is radial.

## Performance

The component uses transforms only and never writes pointer coordinates or layout state every frame.

## Examples

Use simple strings or action objects with an icon and callback.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 tests cover keyboard fallback, controlled open state, touch activation and visual rest/open states.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-orbital-action-menu)
- [Copyable source bundle](../snippets/orbital-action-menu.txt)
