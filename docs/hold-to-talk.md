# Hold to talk

## Overview

Push-to-talk lifecycle button that emits start/end/cancel callbacks and never requests microphone access.

## Install/import

Use the [source bundle](../snippets/hold-to-talk.txt), then import the component from the extracted files.

## Anatomy

One native button contains a decorative indicator, lifecycle copy, and optional `waveform` content.

## Props

`state`, `onStart`, `onEnd`, `onCancel`, `waveform`, `label`, and `disabled` define the lifecycle. Children, native button attributes, visual props, and motion props are forwarded.

## Variants/states

Idle, holding, recording, cancelled, disabled, pointer, keyboard, focus-visible, and reduced-motion states are represented explicitly.

## Motion spec

The indicator uses a bounded CSS state transition; no audio, microphone, or frame loop is started. Reduced motion keeps the lifecycle and removes decorative easing.

## Accessibility

Pointer, Enter, and Space have equivalent start/end behavior. Blur and pointer cancel call `onCancel`; disabled is native. The component does not expose a microphone permission affordance or call `getUserMedia`.

## Performance

Only lifecycle state changes trigger React renders. Pointer capture is released on end/cancel, and unmount clears the active ref.

## Examples

```tsx
<ViHoldToTalk label="Hold to talk" onStart={begin} onEnd={finish} onCancel={cancel} />
```

## Portable source

Manifest `hold-to-talk` includes the component, B04 helper, B04 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers pointer lifecycle and the no-microphone contract; E2E/axe/visual cover native focus and reduced motion. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-hold-to-talk)
- [Copyable source bundle](../snippets/hold-to-talk.txt)
- [Motion recording](../media/hold-to-talk.webm)
