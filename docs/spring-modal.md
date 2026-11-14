# Spring modal

## Overview

Legacy Lab modal demo retained to preserve the original overlay contract.

## Install/import

Open `/lab/spring-modal` for the published compatibility example; the route owns its local demo import.

## Anatomy

The demo has a native trigger, modal dialog, labelled content and a dismiss action.

## Props

Shared visual props and the `closeOnBackdrop` behavior are represented by the Lab demo.

## States

Closed, open, focused, dismissed and reduced-motion states are explicit.

## Motion

Entry and exit use a bounded spring-like transition; reduced motion changes visibility without spatial travel.

## Accessibility

The dialog has a name, an escape/dismiss path and focus returns to its trigger.

## Performance

Only the active overlay is animated; no global listener or persistent timer is used by the compatibility surface.

## Example

Use the trigger and dialog on `/lab/spring-modal` as the reference example.

## Portable source

The isolated portable compatibility source is `src/components/vicomponents/portable/legacy/spring-modal.tsx` (with its colocated stylesheet).

## Tests/provenance

Covered by Lab route and accessibility E2E checks. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-spring-modal)
- [Copyable source bundle](../snippets/spring-modal.txt)
