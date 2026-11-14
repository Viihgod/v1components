# Gesture chord

## Overview

Focusable finite keyboard sequence with a timeout, mismatch callback, and completion callback.

## Install/import

Use the [source bundle](../snippets/gesture-chord.txt), then import the component from the extracted files.

## Anatomy

The group renders decorative keycaps and an optional hint. It never installs a global keyboard listener.

## Props

`sequence`, `timeoutMs`, `onComplete`, `onError`, and `renderKey` define the chord. Children, visual props, motion props, and native group attributes are forwarded.

## Variants/states

Idle, partial progress, complete, mismatch, timeout, focus-visible, and reduced-motion states are explicit.

## Motion spec

Progress uses a CSS variable for a short fill transition. Timeout and completion are state changes only; reduced motion removes the decorative transition.

## Accessibility

The labelled `role=group` is focusable and supports the same keys for keyboard users. Blur resets partial progress, and no interactive content is placed inside decorative keycaps.

## Performance

One timeout is replaced on each accepted key and cleared on mismatch, blur, completion, and unmount.

## Examples

```tsx
<ViGestureChord sequence={["g", "g", "Enter"]} onComplete={openPalette} onError={announceRetry} />
```

## Portable source

Manifest `gesture-chord` includes the component, B04 helper, B04 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers completion, mismatch, timeout, and cleanup; E2E/axe/visual cover focus and reduced motion. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-gesture-chord)
- [Copyable source bundle](../snippets/gesture-chord.txt)
- [Motion recording](../media/gesture-chord.webm)
