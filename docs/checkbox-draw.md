# Checkbox draw

## Overview

`ViCheckboxDraw` adds a drawn check mark while preserving a native checkbox contract.

## Install/import

Use the [source bundle](../snippets/checkbox-draw.txt), then import the component from the extracted files.
import { ViCheckboxDraw } from "@/components/vicomponents";
```

## Anatomy

The visually hidden native checkbox controls an aria-hidden check glyph and a visible associated label.

## Props

`checked`/`defaultChecked`, `onCheckedChange`, `label`, `name`, `disabled`, native input attributes, visual/motion props and an input ref are supported.

## Variants and states

Checked, unchecked, hover, focus-visible, disabled and reduced-motion states remain native.

## Motion spec

The check mark uses opacity/scale for a short CSS transition; reduced motion removes it.

## Accessibility

The checkbox and label are the source of truth; the SVG icon is decorative and focus is outlined outside the box.

## Performance

There are no effects or listeners beyond the native change event.

## Examples

```tsx
<ViCheckboxDraw label="Include prototypes" name="include-prototypes" />
```

## Portable source

Copy the manifest component, shared B02 CSS and Vi visual/surface sources.

## Tests and provenance

Controlled/uncontrolled, Space, label, disabled, name serialization and reduced-motion coverage is in `b02-inputs.vitest.tsx`. Clean-room source ID: **60**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-checkbox-draw)
- [Copyable source bundle](../snippets/checkbox-draw.txt)
- [Motion recording](../media/checkbox-draw.webm)
