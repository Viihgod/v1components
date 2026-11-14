# Choice chips

## Overview

`ViChoiceChips` is a single or multiple selection group with native radio/checkbox semantics.

## Install/import

Use the [source bundle](../snippets/choice-chips.txt), then import the component from the extracted files.
import { ViChoiceChips } from "@/components/vicomponents";
```

## Anatomy

The group contains one native button per option and hidden inputs when `name` is supplied.

## Props

`items` accepts strings or `{ value, label, disabled }`. `value`/`defaultValue`, `onValueChange`, `selectionMode`, `allowEmpty`, `label`, `name`, disabled and shared visual/motion props are supported.

## Variants and states

Single/multiple, selected, unavailable, hover, focus-visible, empty and disabled states are explicit.

## Motion spec

Selection uses a short background/color transition; reduced motion removes transform/transition movement.

## Accessibility

Single mode is a radiogroup, multiple mode is a checkbox group. Roving arrow/Home/End focus and Enter/Space activation work with touch and keyboard.

## Performance

Selection is derived from a small value list and hidden form inputs are rendered only when requested.

## Examples

```tsx
<ViChoiceChips selectionMode="multiple" items={["Design", "Motion"]} name="skills" />
```

## Portable source

Copy the component, shared form helper/CSS and Vi visual/surface sources from its manifest.

## Tests and provenance

Selection modes, controlled state, roving keys, disabled options and form serialization are covered in `b02-inputs.vitest.tsx`. Clean-room source ID: **18**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-choice-chips)
- [Copyable source bundle](../snippets/choice-chips.txt)
- [Motion recording](../media/choice-chips.webm)
