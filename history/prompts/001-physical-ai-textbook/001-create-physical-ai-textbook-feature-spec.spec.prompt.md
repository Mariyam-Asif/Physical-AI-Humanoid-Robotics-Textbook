---
id: 001
title: Create Physical AI Textbook Feature Spec
stage: spec
date: 2025-12-04
surface: agent
model: claude-sonnet-4-5-20250929
feature: 001-physical-ai-textbook
branch: 001-physical-ai-textbook
user: unknown
command: /sp.specify AI/Spec-Driven Textbook on Physical AI & Humanoid Robotics Course


Target Audience (User Personas)
- *As an industry practitioner preparing to study Physical AI & Humanoid Robotics, I need a clearly structured 13-week curriculum organized by modules and weeks so I can plan my learning path and understand prerequisite relationships.*
- *As a robotics learner with basic Python/AI/ROS 2 background, I need environment setup and glossary sections before starting the course so I can prepare tools and understand terminology.*
- *As a university AI/robotics student, I need a unified textbook connecting theory to practical humanoid systems so I can understand how AI maps to physical robot behavior.*

Intent
- Create a complete, AI-generated technical textbook for Physical AI & Humanoid Robotics.
- Use a spec-driven workflow to structure modules, weeks, chapters, and appendices.
- Produce a clean Docusaurus-based textbook ready for deployment to GitHub Pages.
- Ensure clarity, accuracy, consistency, and academic readability.

Scope (What This Specification Covers)
- Four major modules covering foundations, perception, simulation, control, and humanoids.
- Full 13-week structured learning pathway.
- Onboarding content: glossary, environment setup, prerequisites.
- Docusaurus structure: sidebar, file organization, chapter metadata.
- Content quality standards for writing clarity and academic correctness.

Success Criteria
- SC-001: Book builds successfully in Docusaurus with zero build errors or warnings.
- SC-002: Navigation uses a single sidebar with nested collapsible categories organized by module and week.
- SC-003: Every chapter includes valid frontmatter (`title`, `sidebar_label`, `tags`).
- SC-004: All 13 weeks include at least 500 words of explanatory content.
- SC-005: Onboarding section includes environment setup, glossary, and prerequisite reading.
- SC-006: Writing is clear, consistent, and free of plagiarism.
- SC-007: Entire book completed within 14 days.

Constraints
- Format: Markdown/MDX only.
- Project structure: `/docu` Docusaurus site, `/specs-book` specification folder.
- No API keys or secrets in repository.
- Each chapter may not exceed 3,000 words.
- File naming must follow: `module-01-week-01.md`.
- Sidebar must reflect folder structure exactly.
- Terminology must remain consistent across modules.
- Pages must load in under **800 ms** on a 4G mobile connection.

Functional Requirements
- FR-001: Provide onboarding (glossary, prerequisites, environment setup).
- FR-002: Provide four modules with structured internal chapters.
- FR-003: Provide week-by-week organization for Weeks 1–13.
- FR-004: Provide frontmatter for every chapter.
- FR-005: Provide introduction + overview chapters.
- FR-006: Provide appendices (terminology, environment setup).
- FR-007: Provide internal linking between related topics.
- FR-008: Sidebar must follow modules → weeks → topics.

Non-Functional Requirements
- NFR-001: Pages must load in under 800 ms on mobile.
- NFR-002: Writing must be academically clear and technically accurate.
- NFR-003: Folder structure must be clean and consistent.
- NFR-004: Naming conventions must be strictly followed.
- NFR-005: Textbook must be maintainable and extendable.

Non-Goals
- Not providing full robotics hardware tutorials.
- Not building robot control code implementations.
- Not comparing robotics vendors or product pricing.
labels: ["feature-spec", "textbook-creation", "physical-ai", "humanoid-robotics"]
links:
  spec: specs/001-physical-ai-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-physical-ai-textbook/spec.md
  - specs/001-physical-ai-textbook/checklists/requirements.md
tests: []
---

## Prompt

AI/Spec-Driven Textbook on Physical AI & Humanoid Robotics Course


Target Audience (User Personas)
- *As an industry practitioner preparing to study Physical AI & Humanoid Robotics, I need a clearly structured 13-week curriculum organized by modules and weeks so I can plan my learning path and understand prerequisite relationships.*
- *As a robotics learner with basic Python/AI/ROS 2 background, I need environment setup and glossary sections before starting the course so I can prepare tools and understand terminology.*
- *As a university AI/robotics student, I need a unified textbook connecting theory to practical humanoid systems so I can understand how AI maps to physical robot behavior.*

Intent
- Create a complete, AI-generated technical textbook for Physical AI & Humanoid Robotics.
- Use a spec-driven workflow to structure modules, weeks, chapters, and appendices.
- Produce a clean Docusaurus-based textbook ready for deployment to GitHub Pages.
- Ensure clarity, accuracy, consistency, and academic readability.

Scope (What This Specification Covers)
- Four major modules covering foundations, perception, simulation, control, and humanoids.
- Full 13-week structured learning pathway.
- Onboarding content: glossary, environment setup, prerequisites.
- Docusaurus structure: sidebar, file organization, chapter metadata.
- Content quality standards for writing clarity and academic correctness.

Success Criteria
- SC-001: Book builds successfully in Docusaurus with zero build errors or warnings.
- SC-002: Navigation uses a single sidebar with nested collapsible categories organized by module and week.
- SC-003: Every chapter includes valid frontmatter (`title`, `sidebar_label`, `tags`).
- SC-004: All 13 weeks include at least 500 words of explanatory content.
- SC-005: Onboarding section includes environment setup, glossary, and prerequisite reading.
- SC-006: Writing is clear, consistent, and free of plagiarism.
- SC-007: Entire book completed within 14 days.

Constraints
- Format: Markdown/MDX only.
- Project structure: `/docu` Docusaurus site, `/specs-book` specification folder.
- No API keys or secrets in repository.
- Each chapter may not exceed 3,000 words.
- File naming must follow: `module-01-week-01.md`.
- Sidebar must reflect folder structure exactly.
- Terminology must remain consistent across modules.
- Pages must load in under **800 ms** on a 4G mobile connection.

Functional Requirements
- FR-001: Provide onboarding (glossary, prerequisites, environment setup).
- FR-002: Provide four modules with structured internal chapters.
- FR-003: Provide week-by-week organization for Weeks 1–13.
- FR-004: Provide frontmatter for every chapter.
- FR-005: Provide introduction + overview chapters.
- FR-006: Provide appendices (terminology, environment setup).
- FR-007: Provide internal linking between related topics.
- FR-008: Sidebar must follow modules → weeks → topics.

Non-Functional Requirements
- NFR-001: Pages must load in under 800 ms on mobile.
- NFR-002: Writing must be academically clear and technically accurate.
- NFR-003: Folder structure must be clean and consistent.
- NFR-004: Naming conventions must be strictly followed.
- NFR-005: Textbook must be maintainable and extendable.

Non-Goals
- Not providing full robotics hardware tutorials.
- Not building robot control code implementations.
- Not comparing robotics vendors or product pricing.

## Response snapshot

Feature specification `specs/001-physical-ai-textbook/spec.md` and quality checklist `specs/001-physical-ai-textbook/checklists/requirements.md` have been successfully created and validated.

## Outcome

- ✅ Impact: Feature specification and checklist created.
- 🧪 Tests: Spec quality checklist passed all checks.
- 📁 Files: specs/001-physical-ai-textbook/spec.md, specs/001-physical-ai-textbook/checklists/requirements.md created.
- 🔁 Next prompts: The specification is ready for the planning phase. You can proceed with `/sp.plan`.
- 🧠 Reflection: Successfully generated a feature specification and a quality checklist based on user input for a new textbook feature. Handled script execution errors by reverting to agent-native file operations. All spec quality checks passed, and the spec is ready for the next phase.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-new-feature.ps1` script and `create-phr.sh` script failed to execute directly due to environment issues (pwsh not found, bash script not found).
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Investigate robust cross-platform script execution or alternative ways to achieve script functionality.
