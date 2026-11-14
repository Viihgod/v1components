# Undo snackbar

## Overview

`ViUndoSnackbar` pairs a transient message with one reversible native action. It does not perform the undo itself; the caller owns the data mutation.

## Install/import

```tsx
import { ViUndoSnackbar } from "@/components/vicomponents/components/undo-snackbar";
```

## Anatomy

The local host contains a status message, `Undo` action, dismiss button, and keyed polite live region. There is no nested button or portal.

## Props

`open`/`defaultOpen`/`onOpenChange` control visibility, `message` is announced, `actionLabel` defaults to `Undo`, `durationMs` defaults to `6000`, and `onUndo` runs before dismissal. Native attrs, `ref`, visual props, motion props, and `paused` are forwarded.

## Variants and states

Open, paused, action, timeout, Escape, explicit dismiss, controlled, uncontrolled, and reduced-motion states are supported. `durationMs={0}` creates a persistent snackbar until an action or parent close.

## Motion spec

The snackbar uses a short bottom offset and opacity transition. Its functional timer pauses in hover, focus, `paused`, and document-hidden states; reduced motion removes movement.

## Accessibility

The message is a labelled status, Undo is a native button, and dismiss is a separate native button. Escape works while focus is inside; focus is restored to the opener after close when appropriate.

## Performance

One timer is scoped to the component, with no RAF, portal, scroll lock, or per-frame React updates. Unmount cleanup clears timing and focus bookkeeping.

## Examples

```tsx
<ViUndoSnackbar defaultOpen message="Item archived" onUndo={restoreItem} />
<ViUndoSnackbar open={open} onOpenChange={setOpen} durationMs={0} message="Removed" />
```

## Portable source

Use the manifest allowlist: snackbar source, B06 async utility, B06 CSS, and shared visual config/surface files.

## Tests and limitations

Vitest covers controlled close, action callback, timer pause, and cleanup. E2E/axe/visual cover keyboard/touch-equivalent buttons, announcement semantics, and reduced-motion geometry. Provenance: component catalog; source ID `71`; status `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-undo-snackbar)
- [Copyable source bundle](../snippets/undo-snackbar.txt)
