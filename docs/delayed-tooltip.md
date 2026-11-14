# Delayed tooltip

## Overview

Delayed, non-interactive tooltip for concise presentational hints.

## Install/import

Import ViDelayedTooltip from the V1Components components barrel.

## Anatomy

The wrapper watches pointer and focus entry, clones an element to add aria-describedby, and renders a pointer-inert tooltip bubble.

## Props

content, openDelayMs, closeDelayMs, placement and children define the tooltip. Shared visual/motion props are supported.

## Variants/states

Top/bottom/left/right, pending, open, closing and reduced-motion states are available.

## Motion spec

The 140ms open and 80ms close defaults use a light opacity/translate transition; reduced motion opens and closes immediately.

## Accessibility

The trigger is described by role=tooltip only while open. Tooltip content must remain presentational and must not contain interactive controls.

## Performance

Timers are instance-local and cleared on unmount; no viewport or pointer measurement loop is used.

## Examples

Wrap a single labelled button or text control and keep content short.

## Portable source

Manifest allowlists the component, navigation helper and shared B03 stylesheet.

## Tests/provenance/source ID

B03 tests cover pointer/focus delays, cleanup, placement, noninteractive content and reduced motion.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-delayed-tooltip)
- [Copyable source bundle](../snippets/delayed-tooltip.txt)
