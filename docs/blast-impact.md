# Blast Impact

## Overview

Published compatibility entry for the Pong Lab surface and its impact feedback.

## Install/import

Use the [source bundle](../snippets/blast-impact.txt), then import the component from the extracted files.

## Anatomy

The surface includes the game stage, score/status regions, controls and the bounded Blast feedback treatment.

## Props

The compatibility configuration includes shared visual props and the `blastBars` threshold.

## States

Idle, playing, charged, impact, paused and reduced-motion states are represented by readable game status.

## Motion

Impact feedback uses bounded transform/opacity and stops decorative shake when reduced motion is requested.

## Accessibility

Keyboard controls, visible labels and status text provide a path independent of color or motion.

## Performance

The game loop is scoped to the active Lab surface and portable source limits the copied CSS and physics files.

## Example

Use [the Lab preview](https://victormarques.dev/lab#v1c-blast-impact) as the complete Pong compatibility example.

## Portable source

Allowlisted `blast-impact` source uses `src/components/site/pong-game.tsx` and its reviewed physics, text, visual and CSS files.

## Tests/provenance

Covered by the Lab, portable, axe and visual harnesses. Clean-room compatibility documentation; registry status is `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-blast-impact)
- [Copyable source bundle](../snippets/blast-impact.txt)
- [Motion recording](../media/blast-impact.webm)
