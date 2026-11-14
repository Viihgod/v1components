# Segmented

## Overview

Legacy Lab navigation demo retained as a published compatibility entry.

## Install/import

Use the [source bundle](../snippets/segmented.txt), then import the component from the extracted files.

## Anatomy

The demo contains a native navigation group, labelled options and one shared sliding indicator.

## Props

The compatibility demo uses the shared visual props and its local selected option state.

## States

Rest, selected, focus-visible and reduced-motion states remain available; selection is readable without the indicator.

## Motion

The indicator uses a short transform transition. Reduced motion keeps the selected option static.

## Accessibility

Labels and pressed state remain in the accessibility tree; the decorative indicator is hidden.

## Performance

The demo has a bounded option set and animates only the indicator transform.

## Example

Use the published `/lab#v1c-segmented` route as the compatibility example.

## Portable source

The isolated portable compatibility source is `src/components/vicomponents/portable/legacy/sliding-pill.tsx` (with its colocated stylesheet).

## Tests/provenance

Covered by the Lab route and visual harness. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-segmented)
- [Copyable source bundle](../snippets/segmented.txt)
- [Motion recording](../media/segmented.webm)
