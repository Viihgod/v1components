# Submit states

## Overview

`ViSubmitStates` is a presentational submit state machine. It models idle, pending, success, and error without performing network work or hiding business state.

## Install/import

Use the [source bundle](../snippets/submit-states.txt), then import the component from the extracted files.
import { ViSubmitStates } from "@/components/vicomponents/components/submit-states";
```

## Anatomy

The labelled group contains status text, a native submit button, an optional native reset button, and one polite live region.

## Props

`status` is required and finite. `labels` overrides state/reset text; `onSubmit` and `onReset` receive action callbacks; `disabled` disables both. `ref`, native ARIA/HTML attributes, visual props, motion props, and `paused` are supported.

## Variants and states

Idle shows Submit, pending shows a busy disabled action, success shows Submitted plus Reset, and error shows Try again plus Reset. Custom labels and a disabled/empty callback state are supported.

## Motion spec

State changes use tokenized color and text only. No looping or imperative animation is required; reduced motion leaves the causal status unchanged.

## Accessibility

The group is labelled, `aria-busy` reflects pending, native buttons preserve keyboard/touch parity, and status meaning is textual rather than color-only. Pending always blocks duplicate submit callbacks.

## Performance

No timer, observer, portal, or frame loop exists. The component is deterministic across SSR and hydration because it renders from props only.

## Examples

```tsx
<ViSubmitStates status={status} onSubmit={save} onReset={reset} />
<ViSubmitStates status="pending" labels={{ pending: "Uploading…" }} />
```

## Portable source

Copy the submit component, B06 shared utility, B06 CSS, and shared visual config/surface files in the manifest.

## Tests and limitations

Vitest covers pending duplicate prevention, terminal reset, custom labels, and disabled behavior. E2E/axe/visual cover keyboard semantics and all four states. Provenance: component catalog; source ID `72`; status `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-submit-states)
- [Copyable source bundle](../snippets/submit-states.txt)
- [Motion recording](../media/submit-states.webm)
