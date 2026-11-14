# Indeterminate bar

## Overview

An indeterminate progressbar for work where a meaningful percentage is unavailable.

## Install / import

```tsx
import { ViIndeterminateBar } from "@/components/vicomponents/components/indeterminate-bar";
```

## Anatomy

The labelled root contains a text label and a decorative sweep track. The root remains stable when the sweep is paused.

## Props

`label` is required. `size` defaults to `md` and accepts `sm`, `md` or `lg`. `active` defaults to true and controls the loop. Visual/motion props, `paused`, native div attributes and ref are forwarded.

## Variants and states

Supports active, inactive, paused, hidden-document and reduced-motion states. No fake numeric value is exposed.

## Motion spec

The fill uses a single transform-only linear sweep. It stops for inactive/paused/hidden/reduced contexts and retains the track.

## Accessibility

Uses `role="progressbar"` with an accessible label and `aria-busy`; it intentionally omits `aria-valuenow` because progress is indeterminate.

## Performance

One CSS animation runs on the fill only. No timer, RAF or measurement exists, and visibility listeners clean up on unmount.

## Examples

```tsx
<ViIndeterminateBar label="Syncing changes" />
<ViIndeterminateBar label="Paused" active={false} motion="none" />
```

## Portable source

The manifest includes the bar, B07 helper/CSS and Vi visual source.

## Tests and provenance

Vitest covers label and active state; E2E/axe/visual cover semantics and reduced motion. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-indeterminate-bar)
- [Copyable source bundle](../snippets/indeterminate-bar.txt)
- [Motion recording](../media/indeterminate-bar.webm)
