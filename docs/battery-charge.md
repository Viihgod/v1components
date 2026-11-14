# Battery charge

## Overview

A compact battery meter for device or process charge state, with a separate charging cue.

## Install / import

```tsx
import { ViBatteryCharge } from "@/components/vicomponents/components/battery-charge";
```

## Anatomy

The root is a labelled meter containing a fixed battery shell, fill and textual percentage.

## Props

`level` defaults to `0` and clamps from 0 to 100. `charging` defaults to false; `label` is required. Visual/motion props, `paused`, native div attributes and ref are forwarded.

## Variants and states

Supports empty, partial, full, charging, paused, hidden-document and reduced-motion states. Charging is never communicated only by glow.

## Motion spec

The fill uses transform scale for level and a subtle brightness pulse while charging. Reduced motion or paused/hidden state keeps the final fill static.

## Accessibility

Uses `role="meter"`, 0-100 min/max/now and text including the charging state. The battery silhouette is decorative.

## Performance

Only one fill transform and optional brightness animation are used. No timer, RAF or DOM measurement exists.

## Examples

```tsx
<ViBatteryCharge label="Battery" level={74} charging />
<ViBatteryCharge label="Backup" level={18} motion="none" />
```

## Portable source

The allowlist includes the component, B07 helper/CSS and Vi visual source.

## Tests and provenance

Vitest covers clamping and charging text; E2E/axe/visual cover empty/full/charging states. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-battery-charge)
- [Copyable source bundle](../snippets/battery-charge.txt)
- [Motion recording](../media/battery-charge.webm)
