# Skeleton to content

## Overview

A loading boundary that keeps a representative skeleton visible for a minimum time before revealing content.

## Install / import

```tsx
import { ViSkeletonToContent } from "@/components/vicomponents/components/skeleton-to-content";
```

## Anatomy

The root owns `aria-busy` and swaps a decorative skeleton slot for the content slot without a portal or layout measurement.

## Props

`loading`, `skeleton` and `children` are required. `minDurationMs` defaults to `240` and is clamped at zero. Visual/motion props, native div attributes and ref are forwarded.

## Variants and states

Supports loading, minimum-duration hold, loaded and reduced-motion states. The skeleton should match the content footprint supplied by the caller.

## Motion spec

The minimum duration is a lifecycle guard, not an animation. No opacity-only reveal is required; reduced motion changes no content semantics.

## Accessibility

`aria-busy` remains true while the skeleton is visible and the skeleton subtree is hidden from assistive technology. Loaded content returns as normal DOM content.

## Performance

One timeout is created only when loading ends before the minimum duration. It clears on prop changes and unmount; no DOM measurement is used.

## Examples

```tsx
<ViSkeletonToContent loading={loading} skeleton={<ViShimmerSkeleton label="Loading" lines={3} />}>
  <ProjectSummary />
</ViSkeletonToContent>
```

## Portable source

The allowlist includes the boundary, B07 helper/CSS and Vi visual source. Skeleton content remains caller-owned.

## Tests and provenance

Vitest covers minimum duration and hydration-safe output; E2E/axe/visual cover loaded/loading surfaces. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-skeleton-to-content)
- [Copyable source bundle](../snippets/skeleton-to-content.txt)
