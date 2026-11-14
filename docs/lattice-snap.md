# Lattice snap

## Overview

A finite grid snap target with roving focus and deterministic arrow movement.

## Install/import

Use the [source bundle](../snippets/lattice-snap.txt), then import the component from the extracted files.

## Anatomy

A grid contains one selected, focusable tile and presentational sibling buttons.

## Props

`value`/`defaultValue`, `onValueChange`, `columns`, `rows`, `keyboardStep`, and `renderTile` define the lattice. `disabled`, native, visual, and motion props are available.

## Variants/states

Selected, rest, empty, disabled, controlled/uncontrolled, focus-visible, and reduced-motion states are explicit.

## Motion spec

Selection feedback is CSS-only and transform/opacity safe; reduced motion preserves the selected cell without easing.

## Accessibility

Grid and gridcell semantics expose one roving tab stop. Arrows, Home, End, Enter, and Space work at zoom and at every boundary.

## Performance

The grid is finite and renders no measurement or per-frame state. Stable row-column IDs preserve focus through dynamic content.

## Examples

```tsx
<ViLatticeSnap columns={4} rows={3} onValueChange={setCell}
  renderTile={({ column, row }) => `${column + 1}:${row + 1}`} />
```

## Portable source

Manifest `lattice-snap` includes the component, B05 drag helper, B05 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers controlled/uncontrolled selection, arrow/Home/End, disabled and empty grids; E2E/axe/visual cover roving focus and reduced motion. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-lattice-snap)
- [Copyable source bundle](../snippets/lattice-snap.txt)
- [Motion recording](../media/lattice-snap.webm)
