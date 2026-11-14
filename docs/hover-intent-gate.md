# Hover intent gate

## Overview

Shared delayed intent boundary for content that should respond to pointer or focus presence.

## Install/import

Import ViHoverIntentGate from the V1Components components barrel.

## Anatomy

The root wraps arbitrary children and exposes a data-intent state after the delay.

## Props

delayMs, onIntent, onCancel, resetOnLeave and children define the intent contract. Shared visual/motion props are supported.

## Variants/states

Pending, intent, cancelled, pointer, keyboard and reduced-motion states are covered.

## Motion spec

The default delay is 140ms and the visual confirmation uses a 120–220ms border/shadow transition. Reduced motion makes the delay immediate.

## Accessibility

Focus entry mirrors pointer entry; no behavior depends on hover alone.

## Performance

One timeout is scoped to the instance and cleared on cancellation and unmount.

## Examples

Wrap a noninteractive preview or a region containing its own correctly labelled controls.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 tests cover fake timers, focus, pointer leave, cleanup and reduced motion.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-hover-intent-gate)
- [Copyable source bundle](../snippets/hover-intent-gate.txt)
