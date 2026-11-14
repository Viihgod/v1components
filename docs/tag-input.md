# Tag input

## Overview

`ViTagInput` edits a string list while preserving ordinary input, arrow and IME behavior.

## Install/import

```tsx
import { ViTagInput } from "@/components/vicomponents";
```

## Anatomy

The surface contains rendered tags with individually labeled remove buttons and one native text input.

## Props

`value`/`defaultValue`, `onValueChange`, `maxTags`, `separators`, synchronous `validateTag`, `placeholder`, `name`, input hints, disabled, visual/motion props and an input ref are supported.

## Variants and states

Empty, editing, valid, rejected, capped, focused, removable and disabled states are visible and textual.

## Motion spec

Tag color and focus transitions use CSS only and are instant under reduced motion.

## Accessibility

The text field stays native; only configured separators and empty-input Backspace are captured. Remove buttons expose the tag name.

## Performance

Tags are deduplicated synchronously, parsing is event-driven, and hidden inputs serialize the list only when a name is supplied.

## Examples

```tsx
<ViTagInput name="topics" separators={[",", "Enter"]} validateTag={(tag) => tag.length <= 24} />
```

## Portable source

Copy the component, shared form helper/CSS and Vi visual/surface sources from the manifest.

## Tests and provenance

Controlled/uncontrolled tags, paste/separators, validation, max tags, Backspace, IME and form behavior are in `b02-inputs.vitest.tsx`. Clean-room source ID: **32**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-tag-input)
- [Copyable source bundle](../snippets/tag-input.txt)
