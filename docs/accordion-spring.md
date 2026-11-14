# Accordion spring

## Overview

Single or multiple disclosure group with native buttons and a stable focus model.

## Install/import

Import ViAccordionSpring from the V1Components components barrel.

## Anatomy

Each item has a disclosure trigger and a labelled region; item content stays in DOM order.

## Props

items, value/defaultValue/onValueChange, mode and collapsible define behavior. Shared visual/motion props and disabled item support are available.

## Variants/states

Single/multiple, collapsible/non-collapsible, open/closed, disabled, hover, focus-visible and reduced-motion states are supported.

## Motion spec

Panel visibility uses a short ease-out reveal. Reduced motion switches directly between visible and hidden states.

## Accessibility

Arrow keys move between triggers; Home, End and Escape are supported. aria-expanded, aria-controls and region labels are deterministic.

## Performance

No ResizeObserver or per-frame updates are used, so dynamic content does not cause a scroll-jump loop.

## Examples

Use item objects with label and content; multiple mode accepts an array value.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 tests cover controlled/uncontrolled disclosure, roving keys, Escape, empty state and reduced motion.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-accordion-spring)
- [Copyable source bundle](../snippets/accordion-spring.txt)
- [Motion recording](../media/accordion-spring.webm)
