# Bookmark toggle

## Overview

`ViBookmarkToggle` exposes a saved state with a controlled/uncontrolled contract and an optional icon slot.

## Install/import

```tsx
import { ViBookmarkToggle } from "@/components/vicomponents";
```

## Anatomy

The single native button contains a decorative icon and a stable accessible label. The pressed state belongs to the root.

## Props

`pressed`/`defaultPressed` and `onPressedChange` form the state contract. `label` defaults to `Bookmark`, `icon` is optional, and all native, visual, motion, and ref props are supported.

## Variants and states

Rest, saved, focus-visible, disabled, and custom-icon states are supported.

## Motion spec

The icon uses a restrained 1.03 scale settle on selection and 0.98 press scale. Reduced motion keeps the icon static while preserving selected color and aria state.

## Accessibility

`aria-pressed` communicates the saved state and the label remains available even when the icon changes.

## Performance

The component has no timers, pointer listeners, or frame loop; only a small icon transform is animated.

## Examples

```tsx
<ViBookmarkToggle label="Save for later" defaultPressed />
```

## Portable source

Use the manifest component/CSS, shared helper, and B00 core surface/visual files.

## Tests and provenance

Controlled/uncontrolled state, callback, disabled, focus and reduced-motion behavior is covered in `b01-action-feedback.vitest.tsx`. Clean-room source ID: **84**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-bookmark-toggle)
- [Copyable source bundle](../snippets/bookmark-toggle.txt)
