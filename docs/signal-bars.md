# Signal bars

## Overview

A finite signal meter that gives connected, searching and error states a textual meaning.

## Install / import

```tsx
import { ViSignalBars } from "@/components/vicomponents/components/signal-bars";
```

## Anatomy

The labelled meter contains a bounded bar group and a visible state label.

## Props

`strength` defaults to `0` and clamps to `maxBars`. `maxBars` defaults to `4` and clamps to 1-8. `state` defaults to `idle` and accepts `idle`, `searching`, `connected` or `error`; `label` is required. Visual/motion props, `paused`, native div attributes and ref are forwarded.

## Variants and states

Supports empty/full strength and all four semantic states. Searching may pulse; idle, connected and error remain stable.

## Motion spec

Searching uses a restrained opacity pulse on decorative bars. It pauses for hidden documents, explicit pause and reduced motion.

## Accessibility

Uses `role="meter"` with numeric strength and an announced state string. Bars are decorative, so the label/value do not rely on color alone.

## Performance

At most eight bars render and only searching animates. No timer, RAF or measurement exists.

## Examples

```tsx
<ViSignalBars label="Signal" strength={3} state="connected" />
<ViSignalBars label="Searching" strength={0} state="searching" />
```

## Portable source

The explicit manifest contains the signal component, B07 helper/CSS and Vi visual source.

## Tests and provenance

Vitest covers max/strength bounds; E2E/axe/visual cover states and reduced motion. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-signal-bars)
- [Copyable source bundle](../snippets/signal-bars.txt)
- [Motion recording](../media/signal-bars.webm)
