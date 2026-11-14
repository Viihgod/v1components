# Countdown ring

## Overview

A finite countdown with a visible time value, reset action and exactly-once completion callback.

## Install / import

```tsx
import { ViCountdownRing } from "@/components/vicomponents/components/countdown-ring";
```

## Anatomy

The group contains a determinate progressbar ring and a native Reset button. The ring value is remaining milliseconds.

## Props

`durationMs` and `label` are required. `running/defaultRunning` provide controlled/uncontrolled lifecycle; `defaultRunning` defaults to false. `onComplete` runs once at zero; `onReset` runs from Reset. `disabled` disables reset. Visual/motion/native div props and ref are forwarded.

## Variants and states

Supports idle, running, paused, completed, zero-duration, hidden-document and reset states. A controlled parent owns running state when `running` is supplied.

## Motion spec

The timer ticks at 100ms for deterministic tests; the ring transition is visual only. Reduced motion removes SVG interpolation while preserving time and labels.

## Accessibility

Uses progressbar min/max/now/value text and a named native reset control. No announcement is emitted on every tick.

## Performance

One interval exists only while running, visible and non-zero; cleanup happens on pause, completion and unmount. No RAF or per-frame React state is used.

## Examples

```tsx
<ViCountdownRing label="Time remaining" durationMs={10000} defaultRunning onComplete={saveDraft} />
```

## Portable source

The manifest includes the countdown, B07 timer/visibility helper and CSS/token fallback files.

## Tests and provenance

Vitest uses fake timers for completion, hidden-document pause and reset; E2E/axe/visual cover keyboard and ring geometry. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-countdown-ring)
- [Copyable source bundle](../snippets/countdown-ring.txt)
- [Motion recording](../media/countdown-ring.webm)
