# Elastic progress

## Overview

Determinate progress for uploads, preparation and other finite work. `overshoot` is a bounded visual settle only; semantic values never exceed `max`.

## Install / import

```tsx
import { ViElasticProgress } from "@/components/vicomponents/components/elastic-progress";
```

## Anatomy

The root is a labelled `progressbar`, followed by a text value and a compositor-friendly fill track.

## Props

`value` defaults to `0`; `max` defaults to `100` and invalid/zero values use a deterministic positive fallback. `label` is required. `format(value, max)` customizes text and `aria-valuetext`; `overshoot` accepts a boolean or bounded numeric visual amount. Visual and motion props, native div attributes and a ref are forwarded.

## Variants and states

Supports zero, complete, overflow-clamped, custom format and reduced-motion states. There is no disabled state because progress is descriptive.

## Motion spec

CSS transform scale uses the progress token and a 420ms ease-out settle. Overshoot adds glow, not semantic width. `motion="none"` and system reduced motion remove the transition.

## Accessibility

Uses `role="progressbar"`, min/max/now and a visible label. The fill is decorative and focus never enters the track.

## Performance

Only one transform is animated; no timer or RAF is used. Large update streams should be throttled by the caller.

## Examples

```tsx
<ViElasticProgress label="Upload" value={72} overshoot />
<ViElasticProgress label="Build" value={3} max={5} format={(value, max) => `${value}/${max}`} />
```

## Portable source

The manifest allowlists the component, `b07-progress-utils.ts`, `b07-progress.css`, visual config and surface contract. No site alias or private import is required.

## Tests and provenance

Vitest covers clamping and labels; E2E/axe/visual cover route semantics and rest/focus geometry. This is a clean-room behavioral reimplementation; no upstream source was copied. Manifest status: `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-elastic-progress)
- [Copyable source bundle](../snippets/elastic-progress.txt)
- [Motion recording](../media/elastic-progress.webm)
