---
id: 1764788418
title: Update Project Constitution with Governance and Standards
stage: constitution
date: 2025-12-03
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
command: /sp.constitution\nPlease update the constitution according to the following updates provided:\n\n1. **Explicit Governance Procedures**: Expand the Governance section to include:\n   - Amendment Procedure: How changes are proposed, reviewed, and approved.\n   - Versioning Policy: Semantic versioning rules (MAJOR, MINOR, PATCH) for updates.\n   - Compliance Review: How adherence to the constitution is assessed and enforced.\n2. **Cross-Template Alignment**: Add a statement emphasizing the importance of aligning dependent documentation and templates (plan-template.md, spec-template.md, tasks-template.md, commands/*.md, README.md) with the constitution.\n3. **Coding Standards**: Correct the typo "Spec-rors." and rename to "Coding Standards (Spec-Kit Plus & Claude Code)".\n4. **Repository Standards**: Expand with examples such as branch naming conventions, PR merge strategies, or links to detailed repository guidelines.\nlinks: null
files_yaml:
  - .specify/memory/constitution.md
tests_yaml: []
---

## User Prompt



## Assistant Response

The project constitution has been updated to version 1.1.0. This is a minor version bump due to the addition of explicit governance procedures, cross-template alignment guidelines, and expanded coding and repository standards.

The following files require manual follow-up to ensure alignment with the updated constitution:
- .specify/templates/plan-template.md
- .specify/templates/spec-template.md
- .specify/templates/tasks-template.md
- .specify/templates/commands/*.md
- README.md

Suggested commit message:


