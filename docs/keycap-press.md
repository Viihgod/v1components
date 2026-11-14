# Keycap press

## Overview

`ViKeycapPress` presents a key-like action while preserving a normal button interaction model.

## Install/import

```tsx
import { ViKeycapPress } from "@/components/vicomponents";
```

## Anatomy

The root is a native button containing a semantic `<kbd>` label and optional shortcut hint. The root owns depth and pressed geometry.

## Props

`label` is required. `shortcut` is optional, `pressed`/`defaultPressed` support controlled/uncontrolled usage, `onPress` defaults to undefined, and `depth` defaults to `4`px. Native, visual, motion, and ref props are supported.

## Variants and states

Rest, pressed, focus-visible, disabled, and shortcut-present states are supported.

## Motion spec

The depth settles over 120ms with a small root translation. Reduced motion keeps the pressed state without translation.

## Accessibility

`aria-pressed` communicates state and `aria-keyshortcuts` is added when a shortcut is supplied. Native Space/Enter activation is retained.

## Performance

CSS transform and shadow are the only press properties; no runtime listeners or timers are introduced.

## Examples

```tsx
<ViKeycapPress label="K" shortcut="⌘K" defaultPressed />
```

## Portable source

Copy the manifest component/CSS, shared helper, and B00 core surface/visual files.

## Tests and provenance

Keyboard/native focus, controlled state, disabled and depth contract coverage is in `b01-action-feedback.vitest.tsx`. Clean-room source ID: **33**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-keycap-press)
- [Copyable source bundle](../snippets/keycap-press.txt)
