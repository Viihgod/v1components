# Card resize

## Overview

Disclosure card for revealing secondary content without measuring or translating an inner fill.

## Install/import

Use the [source bundle](../snippets/card-resize.txt), then import the component from the extracted files.

## Anatomy

The root owns visual tokens, a native disclosure button contains the summary, and the labelled region contains expandedContent.

## Props

expanded/defaultExpanded/onExpandedChange control the state. collapsedSize controls the stable collapsed token. children is the summary and expandedContent is the revealed ReactNode. Visual and motion props are supported.

## Variants/states

Collapsed, expanded, disabled, hover, pressed, focus-visible and reduced-motion states are explicit.

## Motion spec

The whole surface changes state with a 220ms ease-out transition. Reduced motion removes the transition while preserving the disclosure state.

## Accessibility

The trigger exposes aria-expanded and aria-controls; the panel is a labelled region and collapsed content is removed from the focus order.

## Performance

No per-frame state or measurement loop is used. The component keeps focus rings outside the surface geometry.

## Examples

Use a text summary and a short expandedContent panel; do not put interactive controls inside the summary button.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

Vitest, E2E, axe and visual coverage live in the B03 suites.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-card-resize)
- [Copyable source bundle](../snippets/card-resize.txt)
- [Motion recording](../media/card-resize.webm)
