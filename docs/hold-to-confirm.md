# Hold to confirm

## Overview

Native hold-to-confirm action with a visible progress cue and an explicit cancel path.

## Install/import

Use the [source bundle](../snippets/hold-to-confirm.txt), then import the component from the extracted files.

## Anatomy

The root is one native button. Its progress element is decorative; the label remains the accessible name.

## Props

`holdMs` sets the minimum hold duration (default `900`), `label` names the action, `onConfirm` fires once after completion, `onCancel` fires on interruption, and `disabled` blocks input. Standard button, `ViVisualProps`, and `ViMotionProps` are forwarded.

## Variants/states

Idle, holding, confirmed, cancelled, disabled, focus-visible, and reduced-motion states are represented by data attributes and native button semantics.

## Motion spec

The progress cue follows `holdMs`; it uses a tokenized linear fill and no frame loop. Reduced motion keeps the timing contract but removes decorative transition easing.

## Accessibility

Enter and Space mirror pointer holding. Blur, pointer cancel, and unmount cancel the timer. The focus ring is outside the progress fill and disabled uses the native `disabled` attribute.

## Performance

One timeout is scoped to the instance and cleared on every exit path. No React state is updated per pointer frame.

## Examples

```tsx
<ViHoldToConfirm label="Delete draft" holdMs={700} onConfirm={deleteDraft} onCancel={announceCancel} />
```

## Portable source

Manifest `hold-to-confirm` allowlists the component, B04 manipulation helper, B04 stylesheet, visual props, and surface contract.

## Tests/provenance/source ID

Vitest covers completion, cancellation, timer cleanup, and keyboard parity; E2E/axe/visual cover the published route. Status: published.

## Release behavior

The pill keeps “Hold to confirm” on one line. Its live status sits beneath the control with an 8 px gap.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-hold-to-confirm)
- [Copyable source bundle](../snippets/hold-to-confirm.txt)
- [Motion recording](../media/hold-to-confirm.webm)
