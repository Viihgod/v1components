# Elastic lasso

## Overview

A bounded selection rectangle with click, touch, and keyboard alternatives.

## Install/import

Import `ViElasticLasso`, `ViElasticLassoItem`, and `ViElasticLassoProps` from `src/components/vicomponents/components`.

## Anatomy

A labelled selection group contains option buttons and a decorative lasso outline.

## Props

`items`, `getItemId`, `value`/`defaultValue`, `onValueChange`, `collisionMode`, and `disabled` define selection. Native, visual, and motion props are forwarded.

## Variants/states

Empty, selected, selecting, disabled-item, controlled/uncontrolled, focus-visible, and reduced-motion states are explicit.

## Motion spec

The rectangle is a direct CSS geometry layer; selection commits on pointer release and reduced motion removes decorative transitions.

## Accessibility

Options expose selected state and remain clickable. Ctrl/Cmd+A selects available options and Escape clears; focus is never clipped by the outline.

## Performance

Collision scans are capped at 128 items and use one rect lookup per visible item; capture is cleaned up on cancel, blur, and unmount.

## Examples

```tsx
<ViElasticLasso items={items} getItemId={(item) => item.id} onValueChange={setSelected} />
```

## Portable source

Manifest `elastic-lasso` includes the component, B05 drag helper, B05 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers click, select-all, clear, controlled values, disabled items, collision cleanup, and reduced motion; E2E/axe/visual cover the selection surface. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-elastic-lasso)
- [Copyable source bundle](../snippets/elastic-lasso.txt)
