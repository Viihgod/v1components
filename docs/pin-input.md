# Pin input

## Overview

`ViPinInput` is a segmented one-time-code control designed for paste, backspace and mobile keyboard parity.

## Install/import

Use the [source bundle](../snippets/pin-input.txt), then import the component from the extracted files.
import { ViPinInput } from "@/components/vicomponents";
```

## Anatomy

Each segment is a native input with a shared label; a hidden input serializes the complete code when `name` is present.

## Props

`length` defaults to 6, `inputMode` defaults to numeric, `mask` may use native password rendering, and `value`/`defaultValue`, `onValueChange`, `onComplete`, `autoFocus`, `name`, native attributes, visual/motion props and a first-input ref are supported.

## Variants and states

Empty, partial, complete, masked, disabled, focused, pasted and composing states are supported.

## Motion spec

Segment focus uses CSS border/outline transitions only; reduced motion makes them instant.

## Accessibility

Every segment has a position-aware accessible label. Arrow keys, Home, End, backspace, paste and IME composition are handled without losing native focus behavior.

## Performance

No secret is logged or stored outside the supplied React value; refs handle focus without per-frame state.

## Examples

```tsx
<ViPinInput name="otp" length={6} autoComplete="one-time-code" onComplete={verify} />
```

## Portable source

The manifest includes the component, shared form helper/CSS and Vi visual/surface sources.

## Tests and provenance

Paste, backspace, IME, completion, controlled/uncontrolled and form behavior are covered in `b02-inputs.vitest.tsx`. Clean-room source ID: **19**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-pin-input)
- [Copyable source bundle](../snippets/pin-input.txt)
- [Motion recording](../media/pin-input.webm)
