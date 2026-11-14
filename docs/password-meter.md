# Password meter

## Overview

`ViPasswordMeter` gives transient strength feedback without exposing or persisting the password.

## Install/import

```tsx
import { ViPasswordMeter } from "@/components/vicomponents";
```

## Anatomy

The visual meter is a four-step progressbar with a live text status and optional rule list; no password input is rendered.

## Props

`value` is required for synchronous scoring. `score` can override it, `rules` are synchronous tests, `labels` localize statuses, and `onScoreChange`, visual and motion props are supported.

## Variants and states

Empty, weak, fair, good and strong states are represented by progress and text.

## Motion spec

Bar color changes are CSS-only and are disabled as transitions under reduced motion.

## Accessibility

The progressbar exposes a 0–4 value and a live, human-readable strength label. Rules remain text-readable.

## Performance

Rule functions run synchronously during render; the component never stores, serializes or writes the secret value.

## Examples

```tsx
<ViPasswordMeter value={password} rules={rules} onScoreChange={setScore} />
```

## Portable source

Copy the component, shared B02 CSS and Vi visual/surface sources from the manifest.

## Tests and provenance

Derived/explicit scores, labels, live semantics, reduced motion and no-secret-output coverage is in `b02-inputs.vitest.tsx`. Clean-room source ID: **20**.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-password-meter)
- [Copyable source bundle](../snippets/password-meter.txt)
