# Copy button

## Overview

`ViCopyButton` copies an exact string and communicates success or failure without hiding the action behind an icon-only control.

## Install/import

```tsx
import { ViCopyButton } from "@/components/vicomponents";
```

## Anatomy

One native button contains a decorative status icon and a polite live status label. The fallback uses a temporary off-screen textarea only when needed.

## Props

`value` is required. `copyLabel` defaults to `Copy`, `copiedLabel` to `Copied`, and `successDurationMs` to `1600`. `onCopy` receives `{ success, value }`; native, visual, motion, disabled, and ref contracts are supported.

## Variants and states

Rest, copying, copied, error, focus-visible, and disabled states are supported. Clipboard API rejection becomes an explicit error state.

## Motion spec

Success changes color and iconography over the short feedback token; reduced motion removes transition interpolation while retaining text feedback.

## Accessibility

The changing label is announced politely, and the button remains keyboard operable. Failure is not communicated by color alone.

## Performance

One success timer is replaced and cleaned on unmount. There is no polling, frame loop, or persistent document listener.

## Examples

```tsx
<ViCopyButton value="npm install @your-scope/vicomponents" />
```

## Portable source

Copy the manifest component/CSS, shared helper, and B00 core surface/visual files. The implementation has no project-only import.

## Tests and provenance

Clipboard success/error, fallback path, callback, disabled and unmount cleanup are covered in `b01-action-feedback.vitest.tsx`. Clean-room source ID: **16**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-copy-button)
- [Copyable source bundle](../snippets/copy-button.txt)
