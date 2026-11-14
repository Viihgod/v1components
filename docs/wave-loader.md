# Wave loader

## Overview

A decorative waveform loader for media or streaming work with a stable accessible label.

## Install / import

```tsx
import { ViWaveLoader } from "@/components/vicomponents/components/wave-loader";
```

## Anatomy

The labelled status contains a bounded group of waveform bars. Bar geometry is decorative.

## Props

`count` defaults to `7` and clamps to 1-24. `amplitude` defaults to `0.65` and clamps to 0.1-1. `active` defaults true; `label` is required. Visual/motion props, `paused`, native span attributes and ref are forwarded.

## Variants and states

Supports active, inactive, paused, reduced-motion and hidden-document states. The static waveform remains visible when motion is disabled.

## Motion spec

Bars use a short alternating scale wave with transform origin at the baseline. The loop is CSS-only and stops whenever the shared loop state says so.

## Accessibility

Uses one polite status label; bars are `aria-hidden` and never individually announced.

## Performance

The count is bounded and there is no RAF or state update per frame. Visibility subscriptions are cleaned up.

## Examples

```tsx
<ViWaveLoader label="Loading audio" count={9} amplitude={0.8} />
<ViWaveLoader label="Audio paused" active={false} />
```

## Portable source

The portable manifest includes the wave component, B07 helper/CSS and Vi visual source.

## Tests and provenance

Vitest covers count/amplitude bounds; E2E/axe/visual cover static fallback and reduced motion. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-wave-loader)
- [Copyable source bundle](../snippets/wave-loader.txt)
- [Motion recording](../media/wave-loader.webm)
