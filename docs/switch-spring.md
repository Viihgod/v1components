# Switch spring

## Overview

`ViSwitchSpring` styles a real checkbox as a spring-like switch.

## Install/import

```tsx
import { ViSwitchSpring } from "@/components/vicomponents";
```

## Anatomy

The native checkbox remains in the DOM and drives a decorative track/thumb plus a visible label.

## Props

`checked`/`defaultChecked`, `onCheckedChange`, `label`, `name`, `disabled`, native input attributes, visual/motion props and an input ref are supported.

## Variants and states

On/off, hover, keyboard focus, disabled and reduced-motion states are represented by native checked/disabled state.

## Motion spec

The thumb uses a short transform transition; reduced motion makes it immediate.

## Accessibility

The label is associated with the checkbox, Space works natively, and form serialization uses the supplied name.

## Performance

No effects, timers or pointer listeners are used.

## Examples

```tsx
<ViSwitchSpring label="Reduce motion" name="reduce-motion" defaultChecked />
```

## Portable source

The manifest includes the component, shared B02 CSS and Vi visual props.

## Tests and provenance

Controlled/uncontrolled, label, keyboard, disabled and form behavior are covered in `b02-inputs.vitest.tsx`. Clean-room source ID: **59**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-switch-spring)
- [Copyable source bundle](../snippets/switch-spring.txt)
