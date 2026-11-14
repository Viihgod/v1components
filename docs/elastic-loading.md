# Elastic loading

## Overview

Legacy Lab loading indicator retained as a published compatibility entry.

## Install/import

Use the [source bundle](../snippets/elastic-loading.txt), then import the component from the extracted files.

## Anatomy

The indicator contains a labelled loading status and a bounded set of decorative dots.

## Props

The demo exposes shared visual props and a bounded `dotCount` choice.

## States

Loading, settled, focus context and reduced-motion states preserve the loading label.

## Motion

Dots use a short staggered transform/opacity loop; reduced motion presents a static loading state.

## Accessibility

The status has readable loading text and decorative dots are hidden from assistive technology.

## Performance

Dot count is capped and the loop uses transform/opacity rather than layout properties.

## Example

Use [the Lab preview](https://victormarques.dev/lab#v1c-elastic-loading) as the reference loading example.

## Portable source

The isolated portable compatibility source is `src/components/vicomponents/portable/legacy/elastic-loading.tsx` (with its colocated stylesheet).

## Tests/provenance

Covered by Lab route and accessibility E2E checks. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-elastic-loading)
- [Copyable source bundle](../snippets/elastic-loading.txt)
- [Motion recording](../media/elastic-loading.webm)
