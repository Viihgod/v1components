# Slide to unlock

## Overview

Bounded progress gesture for an unlock action, with cancellation and optional reset.

## Install/import

Import `ViSlideToUnlock` from `src/components/vicomponents/components`.

## Anatomy

The slider surface contains a translated progress fill and a labelled thumb; the fill is decorative.

## Props

`progress`/`defaultProgress`, `onProgressChange`, `onUnlock`, `threshold`, `resetAfterMs`, and `label` define behavior. Visual, motion, and native div attributes are forwarded.

## Variants/states

Locked, dragging, unlocked, resetting, disabled, focus-visible, controlled/uncontrolled, and reduced-motion states are supported.

## Motion spec

Progress is a CSS percentage and the thumb uses a bounded transform. Unlock can schedule one reset timer; reduced motion removes transition easing without changing progress.

## Accessibility

`role=slider` exposes a 0..1 value and supports arrows, Home, and End. Pointer capture and reset timers are cleared on blur, cancel, and unmount.

## Performance

Only the latest pointer update is published; the component never starts a per-frame RAF loop or locks document scrolling.

## Examples

```tsx
<ViSlideToUnlock label="Reveal archive" threshold={0.8} resetAfterMs={1200} onUnlock={reveal} />
```

## Portable source

Manifest `slide-to-unlock` includes the component, B04 helper, B04 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers keyboard unlock and cleanup; E2E/axe/visual cover locked, focus, and reduced-motion states. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-slide-to-unlock)
- [Copyable source bundle](../snippets/slide-to-unlock.txt)
