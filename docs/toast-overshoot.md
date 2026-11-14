# Toast overshoot

## Overview

`ViToastOvershoot` is a local, transient status message for completed work or lightweight feedback. It is not a dialog, does not trap focus, and does not create a global portal.

## Install/import

Use the [source bundle](../snippets/toast-overshoot.txt), then import the component from the extracted files.
import { ViToastOvershoot } from "@/components/vicomponents/components/toast-overshoot";
```

No runtime dependency beyond React and the Vi token contract is required.

## Anatomy

The root is a positioned host with a status surface, a native dismiss button, and one visually hidden polite live region. Placement is relative to the host so showing a toast does not shift page layout.

## Props

`open`/`defaultOpen`/`onOpenChange` form the controlled/uncontrolled visibility contract. `message` is the content, `placement` accepts the six top/bottom alignment values, and `autoCloseMs` defaults to `4200` (`0` disables it). `className`, `style`, `ref`, ARIA attributes, visual props, `motion`, `motionConfig`, and `paused` are forwarded/documented by the shared contract.

## Variants and states

Rest, entering, open, paused, reduced-motion, dismissed, and empty-message states are supported. A close action remains available while open; a controlled parent owns the final state.

## Motion spec

CSS owns a short emphasized scale/opacity entry (about 220ms), with a smaller exit offset. The timer is functional rather than visual and pauses on hover, focus, `paused`, and `document.hidden`. `prefers-reduced-motion` keeps the message and removes the travel/overshoot. No GSAP timeline is needed.

## Accessibility

The surface exposes a `status` role, one polite announcement per open/message identity, Escape dismissal when focus is inside, and a native dismiss button. Focus is never moved into the toast; if a focused toast closes, focus returns to the element that opened it.

## Performance

The component uses one finite timer, no per-frame state, compositor-friendly transform/opacity, and no portal or document scroll lock. Timers are cleared on interruption and unmount.

## Examples

```tsx
<ViToastOvershoot defaultOpen message="Changes saved" placement="top-end" />
<ViToastOvershoot open={open} onOpenChange={setOpen} message="Saved" autoCloseMs={0} />
```

## Portable source

The manifest allowlists the component, `shared/b06-async-utils.tsx`, and `shared/b06-async.css`. Copy those files plus the visual-props/surface files named by the manifest; no private alias is required.

## Tests and limitations

Vitest covers timeout pause/resume, controlled close, focus restoration and reduced-motion metadata. E2E, axe, and visual coverage exercise the route, keyboard dismissal and rest/focus geometry. Provenance: component catalog, clean-room behavioral reimplementation; source ID `4`; status `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-toast-overshoot)
- [Copyable source bundle](../snippets/toast-overshoot.txt)
- [Motion recording](../media/toast-overshoot.webm)
