# Expanding search

## Overview

`ViExpandingSearch` is a native search form that expands on focus or non-empty value.

## Install/import

```tsx
import { ViExpandingSearch } from "@/components/vicomponents";
```

## Anatomy

The root is a form with a real search input and an associated visually-hidden label.

## Props

`value`/`defaultValue`, `onValueChange`, `onSubmit`, `collapsedWidth`, `expandedWidth`, `placeholder`, native input props, visual/motion props and an input ref are supported.

## Variants and states

Collapsed, expanded, focused, populated, submitted, disabled and reduced-motion states retain native search behavior.

## Motion spec

Only width transitions; reduced motion removes the transition. No animation library or per-frame state is used.

## Accessibility

The form and search input have native semantics, and Escape blurs without swallowing typing or arrow keys.

## Performance

The width is a CSS variable and query state changes only on input events.

## Examples

```tsx
<ViExpandingSearch placeholder="Search projects" onSubmit={runSearch} />
```

## Portable source

The manifest includes the component, shared B02 CSS and Vi visual/surface sources.

## Tests and provenance

Controlled/uncontrolled query, submit/Escape, focus width and native attributes are covered in `b02-inputs.vitest.tsx`. Clean-room source ID: **25**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-expanding-search)
- [Copyable source bundle](../snippets/expanding-search.txt)
