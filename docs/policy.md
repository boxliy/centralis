# Documentation Policy

Purpose: define how documentation is organized and maintained in this project.
Read this before adding or moving project documents.
This file does not define product requirements or implementation behavior.

## Principles

- Keep one authoritative document per topic.
- Prefer shallow structure and stable subject-based file names.
- Do not create phase documents such as `SUMMARY.md`, `IMPLEMENTATION.md`, or `CHANGELOG.md` unless explicitly requested.
- Do not create empty folders, placeholder documents, or duplicate summaries.
- Link to the source of truth instead of repeating the same content in multiple places.

## Locations

- `docs/spec/`: documents that define what must be true.
- `docs/runbook/`: documents that define a sequence to execute.
- `docs/reference/`: documents that explain the current checked-in layout, implementation shape, or research context without defining correctness.
- `docs/decisions/`: documents that record why a long-lived tradeoff was accepted.

## File Names

Use stable `kebab-case` names based on the subject:

```text
docs/spec/contact-form.md
docs/runbook/local-development.md
docs/reference/contact-form-backends.md
docs/decisions/form-backend-provider.md
```

Avoid date prefixes and lifecycle labels such as `draft`, `final`, `v2`, or `phase1` unless chronology is part of the subject.

## Routing Header

Every document should begin with a short routing header:

```text
Purpose: ...
Read this when ...
This file does not ...
```
