# Typing indicator

## Overview

A compact status for conversational typing or background response activity.

## Install / import

```tsx
import { ViTypingIndicator } from "@/components/vicomponents/components/typing-indicator";
```

## Anatomy

The root is a labelled status containing a bounded decorative dot group.

## Props

`count` defaults to `3` and clamps to 1-5. `size` defaults to `md`; `active` defaults to true; `label` is required. Visual/motion props, `paused`, native span attributes and ref are forwarded.

## Variants and states

Supports active, inactive, paused, reduced-motion and hidden-document states. Inactive dots remain a quiet static cue.

## Motion spec

Dots use a short staggered translate/opacity pulse. The loop pauses from the shared loop state and never updates React per frame.

## Accessibility

The root uses a polite status with the caller's label. Dots are decorative and not individually announced.

## Performance

At most five CSS animations run. No timers, RAF or observers are created beyond one cleaned visibility subscription.

## Examples

```tsx
<ViTypingIndicator label="Alex is typing" />
<ViTypingIndicator label="Typing paused" active={false} />
```

## Portable source

The portable allowlist contains the indicator, B07 helper/CSS and Vi visual source.

## Tests and provenance

Vitest covers count bounds and inactive fallback; E2E/axe/visual cover label and reduced motion. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-typing-indicator)
- [Copyable source bundle](../snippets/typing-indicator.txt)
- [Motion recording](../media/typing-indicator.webm)
