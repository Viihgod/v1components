# Status pill

## Overview

`ViStatusPill` presents a finite, readable status. It keeps text as the source of meaning and treats icons as optional decoration.

## Install/import

```tsx
import { ViStatusPill } from "@/components/vicomponents/components/status-pill";
```

## Anatomy

The root is an inline status with an optional icon span, a text label, and a dedicated polite live region for non-idle changes.

## Props

`status` accepts `idle`, `pending`, `success`, `error`, `warning`, or `info`. `labels` overrides text, `icons` supplies React nodes, and `className`, `style`, `ref`, ARIA attributes, visual props, motion props, and `paused` are supported.

## Variants and states

Default labels/icons exist for every status, including empty custom maps. Unknown runtime strings safely fall back to `info`; idle remains quiet while active statuses are announced.

## Motion spec

Status changes use tokenized color/border treatment only. No continuous animation runs, so reduced motion preserves the same semantic and visual state.

## Accessibility

The root has `role="status"`, readable text, and `aria-live="off"` because the separate live region announces only the status identity. Icons are `aria-hidden` and never carry meaning alone.

## Performance

The pill is static, has no timer/observer, and does not allocate animation frames. A status update changes one short live-region string.

## Examples

```tsx
<ViStatusPill status="success" labels={{ success: "Synchronized" }} />
<ViStatusPill status="pending" icons={{ pending: <Spinner aria-hidden /> }} />
```

## Portable source

The manifest allowlists this component, B06 shared async utilities, B06 CSS, and the shared visual config/surface files.

## Tests and limitations

Vitest verifies readable labels and that unrelated rerenders do not create duplicate live regions. E2E/axe/visual cover status semantics and the complete state surface. Provenance: component catalog; source ID `63`; status `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-status-pill)
- [Copyable source bundle](../snippets/status-pill.txt)
