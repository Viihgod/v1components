# Swipe to reveal

## Overview

A bounded reveal row whose actions work without hover and remain native buttons.

## Install/import

Import `ViSwipeToReveal` and `ViSwipeAction` from `src/components/vicomponents/components`.

## Anatomy

Content sits above an action rail; the rail is revealed by one horizontal transform.

## Props

`children`, `actions`, `direction`, `threshold`, `open`/`defaultOpen`, and `onOpenChange` are supported with `disabled`, native div, visual, and motion props.

## Variants/states

Closed, dragging, open, action-disabled, controlled/uncontrolled, focus-visible, and reduced-motion states are explicit.

## Motion spec

Reveal distance is bounded by action count and CSS transform. Reduced motion removes settle easing while preserving state.

## Accessibility

Arrow keys, Enter, Space, and Escape mirror touch. Actions are native buttons, nested interactive content is protected, and closing restores focus to the row.

## Performance

Pointer moves write a single custom property; action callbacks and capture cleanup are deterministic.

## Examples

```tsx
<ViSwipeToReveal actions={[{ id: "archive", label: "Archive", onSelect: archive }]}>
  Message
</ViSwipeToReveal>
```

## Portable source

Manifest `swipe-to-reveal` includes the component, B05 drag helper, B05 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers controlled/uncontrolled keyboard and action activation; E2E/axe/visual cover rest/open/focus states. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-swipe-to-reveal)
- [Copyable source bundle](../snippets/swipe-to-reveal.txt)
