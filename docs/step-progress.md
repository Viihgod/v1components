# Step progress

## Overview

A controlled or uncontrolled step navigator for finite workflows. It keeps current state textual and keyboard reachable.

## Install / import

```tsx
import { ViStepProgress } from "@/components/vicomponents/components/step-progress";
```

## Anatomy

An ordered list contains one native button per step, with an index, label and optional description. The current button carries `aria-current="step"`.

## Props

`steps` accepts strings or `{ id, label, description, disabled }` records. `value/defaultValue` use a zero-based index; `defaultValue` is `0`. `onValueChange` receives a selectable index. `orientation` defaults to horizontal and `disabled` disables the group. Visual/motion props, native list attributes and ref are forwarded.

## Variants and states

Supports empty, current, complete, upcoming and disabled steps in horizontal or vertical layout. IDs are stable when supplied.

## Motion spec

State color and index changes use short CSS transitions. No layout animation is applied, and reduced motion leaves geometry stable.

## Accessibility

Native buttons provide pointer and touch activation. Arrow keys move roving focus; Home/End jump; Enter/Space select. Focus rings sit outside the button shape.

## Performance

The list is bounded by the caller and has no observers or per-frame updates. Content remains in normal flow to avoid scroll jumps.

## Examples

```tsx
const [step, setStep] = useState(0);
<ViStepProgress value={step} onValueChange={setStep} steps={["Brief", "Build", "Ship"]} />
```

## Portable source

The portable manifest includes the step component, B07 helper/CSS and Vi visual source.

## Tests and provenance

Vitest covers controlled updates and arrows/Home/End/Enter; E2E/axe/visual cover orientation and focus. Clean-room implementation, manifest `published`.

## Preview and source

- [Interactive preview and live Settings](https://victormarques.dev/lab#v1c-step-progress)
- [Copyable source bundle](../snippets/step-progress.txt)
