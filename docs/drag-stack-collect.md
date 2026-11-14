# Drag stack collect

## Overview

A finite stack whose top card can be collected upward or released downward.

## Install/import

Import `ViDragStackCollect` and `ViDragStackCollectItem` from `src/components/vicomponents/components`.

## Anatomy

The root owns one active top card and decorative, non-interactive fan cards behind it.

## Props

`items`, `onCollect`, `onRelease`, `renderItem`, and `maxFan` are supported with native, visual, and motion props.

## Variants/states

Empty, rest, dragging, collected, released, keyboard, focus-visible, and reduced-motion states are explicit.

## Motion spec

Cards use bounded transform and rotation; ArrowUp/ArrowDown provide the same directional actions without a frame loop.

## Accessibility

The stack and active card remain focusable; Escape cancels. Capture is released on blur, pointer cancel, and unmount, and no microphone or external permission is requested.

## Performance

Only the active card writes drag coordinates; fan rotation is a static custom property capped by `maxFan`.

## Examples

```tsx
<ViDragStackCollect items={cards} onCollect={collect} onRelease={release} />
```

## Portable source

Manifest `drag-stack-collect` includes the component, B05 drag helper, B05 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers keyboard directional actions, pointer cancel, empty state, and cleanup; E2E/axe/visual cover the stack and focus. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-drag-stack-collect)
- [Copyable source bundle](../snippets/drag-stack-collect.txt)
