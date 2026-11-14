# Toast stack

## Overview

`ViToastStack` renders a bounded, deterministic list of transient feedback. The caller owns item insertion/removal; the stack only reports stable-ID dismissals.

## Install/import

```tsx
import { ViToastStack, type ViToastStackItem } from "@/components/vicomponents/components/toast-stack";
```

## Anatomy

The root is a labelled region containing ordered status items. Each item has message text, optional action, native dismiss button, and one keyed polite live region. The stack is local and does not portal.

## Props

`items` is a readonly stable-ID array. `maxVisible` defaults to `3` and shows the first items in order; `placement` selects host alignment; `durationMs` defaults to `5000`; `onDismiss(id)` reports timeout/action/close. Items may override duration/tone and provide an action callback. Visual/motion/native attributes and `paused` are supported.

## Variants and states

Empty, one item, bounded overflow, info/success/error/warning tone, focused/hover-paused, hidden-document, action, explicit dismiss, and reduced-motion states are supported.

## Motion spec

Items use small tokenized transform/opacity transitions. Each item owns one finite timer that pauses on hover, focus, explicit `paused`, and document-hidden state. Reduced motion removes the movement while preserving order and dismissal.

## Accessibility

The region has an accessible label; each item is a named status with a native dismiss/action button. Stable IDs key the live regions so rerenders do not repeat announcements. Input order is preserved and no focus trap is introduced.

## Performance

Visible work is capped by `maxVisible`; timers and listeners are scoped per visible item and cleaned on removal/unmount. There is no portal, scroll lock, RAF, or setState per frame.

## Examples

```tsx
const items: ViToastStackItem[] = [{ id: "saved", message: "Saved", tone: "success" }];
<ViToastStack items={items} onDismiss={(id) => remove(id)} maxVisible={3} />
```

## Portable source

The manifest allowlists the stack source, B06 async utility, B06 CSS, and shared visual config/surface files.

## Tests and limitations

Vitest covers maxVisible/order, hidden-document timer pausing, stable-ID dismissals, and actions. E2E/axe/visual cover the route, keyboard actions, reduced motion, and stack geometry. Provenance: component catalog; source ID `75`; status `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-toast-stack)
- [Copyable source bundle](../snippets/toast-stack.txt)
