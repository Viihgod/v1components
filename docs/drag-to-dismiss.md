# Drag to dismiss

## Overview

A cancellable one-axis drag surface with pointer, touch, keyboard, and focus parity.

## Install/import

Import `ViDragToDismiss` from `src/components/vicomponents/components`.

## Anatomy

One labelled focusable surface owns the drag transform; children remain ordinary content.

## Props

`children`, `axis`, `threshold`, `onDismiss`, `onCancel`, and `disabled` are supported alongside native div, visual, and motion props.

## Variants/states

Rest, dragging, cancelled, dismissed, disabled, focus-visible, controlled motion, and reduced-motion states are explicit.

## Motion spec

Only a CSS transform moves during the gesture. Thresholds are normalized to the measured axis; reduced motion shortens settle transitions.

## Accessibility

Enter and Space dismiss; Escape cancels. Focus outline is outside the moving shape, pointer capture is released on cancel/blur/unmount, and nested interactive targets are not hijacked.

## Performance

Pointer movement writes CSS variables directly, avoiding per-frame React state and layout reads.

## Examples

```tsx
<ViDragToDismiss axis="horizontal" onDismiss={remove} onCancel={restore}>Dismiss me</ViDragToDismiss>
```

## Portable source

Manifest `drag-to-dismiss` includes the component, B05 drag helper, B05 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers keyboard, pointer completion/cancel, disabled, and cleanup; E2E/axe/visual cover focus and reduced motion. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-drag-to-dismiss)
- [Copyable source bundle](../snippets/drag-to-dismiss.txt)
