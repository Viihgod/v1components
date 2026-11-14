# Notification slide in

## Overview

`ViNotificationSlideIn` is a local notification with a directional slide, explicit dismiss action, and pauseable lifetime. It is not a modal and never traps focus.

## Install/import

```tsx
import { ViNotificationSlideIn } from "@/components/vicomponents/components/notification-slide-in";
```

## Anatomy

A positioned host contains a status surface, message, native dismiss button, and one keyed polite live region. Placement is host-relative and needs no portal.

## Props

`open`/`defaultOpen`/`onOpenChange` manage visibility, `message` supplies content, `placement` chooses top/bottom alignment, and `autoCloseMs` defaults to `5200` (`0` disables). Native attributes, `ref`, visual props, motion props, and `paused` are supported.

## Variants and states

Open, closed, entering, paused, document-hidden, reduced-motion, and controlled states are supported. Closed content remains in the deterministic DOM for a short CSS transition but is `aria-hidden` and not interactive.

## Motion spec

The notification uses a tokenized 220ms translate/opacity entry. Hover, focus, explicit pause, and hidden documents suspend the close timer. Reduced motion removes translation while keeping visibility feedback.

## Accessibility

The surface exposes status semantics and one polite announcement per message/open identity. Escape and the native dismiss button close it; focus returns to the opener only when focus was inside the notification.

## Performance

Only one finite timer and transform/opacity are used. Cleanup handles timer, focus restoration, and unmount; no global listeners survive the component.

## Examples

```tsx
<ViNotificationSlideIn defaultOpen message="A project is ready" placement="bottom-end" />
<ViNotificationSlideIn open={open} onOpenChange={setOpen} message="Updated" autoCloseMs={0} />
```

## Portable source

Copy the component, B06 utility, and B06 CSS listed in its manifest with the shared visual config/surface dependencies.

## Tests and limitations

Vitest covers controlled visibility, timer/focus behavior, and cleanup. E2E/axe/visual cover keyboard dismissal, placement, reduced motion, and focus geometry. Provenance: component catalog; source ID `69`; status `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-notification-slide-in)
- [Copyable source bundle](../snippets/notification-slide-in.txt)
