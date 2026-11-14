# Prompt composer

## Overview

`ViPromptComposer` is a bounded native textarea/form surface for short prompts. It does not send network requests, own async state, or persist secrets.

## Install/import

Use the [source bundle](../snippets/prompt-composer.txt), then import the component from the extracted files.
import { ViPromptComposer } from "@/components/vicomponents/components/prompt-composer";
```

## Anatomy

The root is a native `form` containing a labelled `textarea`, character count, polite status, and native submit button. The form is a small client boundary.

## Props

`value`/`defaultValue`/`onValueChange` control the text. `onSubmit(value)` receives a non-empty value, `minRows` defaults to `2`, `maxRows` to `8`, `maxLength` forwards to the textarea, and `pending` disables editing/submission while exposing busy state. Native form attributes, `ref`, visual props, `motion`, `motionConfig`, and `paused` are supported.

## Variants and states

Empty, filled, character-limited, controlled, uncontrolled, pending, disabled-by-pending, and reduced-motion states are supported. Whitespace-only content cannot submit.

## Motion spec

The composer uses CSS focus/color feedback only. No decorative transition is required for text entry; reduced motion therefore preserves all field and submit semantics without an animated substitute.

## Accessibility

The textarea remains native and labelled, the form exposes `aria-busy` while pending, the status is polite, and the submit button is disabled during pending. Enter inserts text; Ctrl/Cmd+Enter submits for keyboard parity.

## Performance

No resize observer, per-keystroke layout measurement, timer, or frame state is used. Native `rows` and `maxLength` keep layout and work bounded.

## Examples

```tsx
<ViPromptComposer defaultValue="Draft a short brief" onSubmit={send} maxLength={280} />
<ViPromptComposer value={value} onValueChange={setValue} pending={pending} onSubmit={submit} />
```

## Portable source

The allowlist contains the component, B06 async helper, and B06 CSS plus the shared visual config/surface files from the manifest.

## Tests and limitations

Vitest covers controlled/uncontrolled text, max length, Ctrl/Cmd+Enter, and pending duplicate prevention. E2E/axe/visual cover native field semantics, pending state, and rest/focus geometry. Provenance: component catalog; source ID `46`; status `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-prompt-composer)
- [Copyable source bundle](../snippets/prompt-composer.txt)
- [Motion recording](../media/prompt-composer.webm)
