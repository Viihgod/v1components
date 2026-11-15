# V1Components motion skills

- [V1Components Motion](skills/v1c-motion/SKILL.md) guides implementation. Its examples cover pointer-led hover, icon feedback, stable disclosures, and gestures.
- [V1Components Motion Review](skills/v1c-motion-review/SKILL.md) guides motion QA and regression review.

## Install

Run either pair with the GitHub CLI in your project. Use `--scope user` to make the skills available across projects on your machine.

### Codex

```sh
gh skill install Viihgod/v1components skills/v1c-motion --agent codex --scope project
gh skill install Viihgod/v1components skills/v1c-motion-review --agent codex --scope project
```

In Codex, invoke `$v1c-motion` or `$v1c-motion-review`.

### Claude Code

```sh
gh skill install Viihgod/v1components skills/v1c-motion --agent claude-code --scope project
gh skill install Viihgod/v1components skills/v1c-motion-review --agent claude-code --scope project
```

In Claude Code, invoke `/v1c-motion` or `/v1c-motion-review`.

For manual installation, copy both folders from [skills](skills/) into `.agents/skills/` for Codex or `.claude/skills/` for Claude Code. Keep each folder intact. Start a new session if a newly installed skill is missing from the list.
