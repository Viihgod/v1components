# Reorderable list

## Overview

A stable-ID reorder surface with pointer drag and full keyboard grab/move/drop alternatives.

## Install/import

Use the [source bundle](../snippets/reorderable-list.txt), then import the component from the extracted files.

## Anatomy

An ordered list contains focusable list items rendered by the caller.

## Props

`items`, `getId`, `renderItem`, `onReorder`, `axis`, and `disabled` are required or optional as typed. Native list, visual, and motion props are forwarded.

## Variants/states

Rest, pointer-dragging, keyboard-grabbed, empty, disabled, controlled parent order, focus-visible, and reduced-motion states are explicit.

## Motion spec

The active item uses transform-only feedback; centers are read once on release and no portal is used.

## Accessibility

List positions expose `aria-posinset`/`aria-setsize` and a live position announcement. Space/Enter grabs or drops, arrows/Home/End move, and Escape rolls back the keyboard transaction.

## Performance

Stable IDs make refs predictable and release collision work is linear in the visible list. Pointer capture is cleared on blur/cancel/unmount.

When a pointer reaches a 32px edge band, the owning list scrolls by a bounded 12px step; no page scroll lock or unbounded auto-scroll loop is installed.

## Examples

```tsx
<ViReorderableList items={items} getId={(item) => item.id} onReorder={setItems}
  renderItem={(item) => <span>{item.label}</span>} />
```

## Portable source

Manifest `reorderable-list` includes the component, B05 drag helper, B05 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers keyboard order, rollback, stable IDs, pointer cleanup, and empty state; E2E/axe/visual cover position announcements and focus. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-reorderable-list)
- [Copyable source bundle](../snippets/reorderable-list.txt)
- [Motion recording](../media/reorderable-list.webm)
