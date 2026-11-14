# Value scrubber

## Overview

Horizontal timeline-style scrubber with pointer, touch, and keyboard parity.

## Install/import

Use the [source bundle](../snippets/value-scrubber.txt), then import the component from the extracted files.

## Anatomy

The focusable slider surface renders a progress track and an accessible formatted value.

## Props

`value`/`defaultValue`, `onValueChange`, `min`, `max`, `step`, `sensitivity`, `format`, and `label` are supported. Native div attributes, visual props, and motion props are forwarded.

## Variants/states

Controlled/uncontrolled, disabled, horizontal drag, keyboard, hover, focus-visible, bounds, and reduced-motion states are explicit.

## Motion spec

Only the progress transform and thumb position change. `touch-action: pan-y` preserves page scrolling while horizontal scrubbing; reduced motion disables decorative transitions.

## Accessibility

`role=slider` exposes the formatted value and supports arrows, Home, and End. The visible label and focus outline are not clipped by the track.

## Performance

The latest pointer coordinate is normalized and snapped without DOM measurement or per-frame React animation state.

## Examples

```tsx
<ViValueScrubber label="Playback" max={240} format={(seconds) => `${seconds}s`} />
```

## Portable source

Manifest `value-scrubber` includes the component, B04 helper, B04 stylesheet, and core visual contracts.

## Tests/provenance/source ID

Vitest covers keyboard bounds; E2E/axe/visual cover pointer/focus/rest behavior. Status: published.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-value-scrubber)
- [Copyable source bundle](../snippets/value-scrubber.txt)
- [Motion recording](../media/value-scrubber.webm)
