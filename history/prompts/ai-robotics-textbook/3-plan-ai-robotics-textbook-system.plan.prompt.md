---
id: 3
title: Plan AI Robotics Textbook System
stage: plan
date: 2025-12-05
surface: agent
model: claude-sonnet-4-5-20250929
feature: ai-robotics-textbook
branch: 001-ai-robotics-textbook
user: User
command: /sp.plan
labels: ["planning", "implementation"]
links:
  spec: specs/001-ai-robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
- specs/001-ai-robotics-textbook/plan.md
tests:
[]
---

## Prompt

Define technical requirements and implementation plan for the Physical AI & Humanoid Robotics textbook system using Docusaurus, MDX, and fully validated chapter templates. Ensure AI can autonomously generate content, follow component standards, and validate outputs against specifications.

---

## Architecture Sketch
- **Docusaurus-based system**
  - `/docs/` → all module/week/chapter MDX files
  - `/templates/` → chapter-template.md with frontmatter, exercises, callouts, key takeaways
  - `/contracts/` → JSON Schema and TypeScript interfaces for metadata validation
 optional props
      2. Docusaurus Theme Configuration: prev/next navigation, display customization
      3. Build Pipeline Integration: run validations, fail build with errors
      4. Exercise Block Component Design: collapsible sections, attempt tracking, accessibility
      5. Content Type Variant Guidance: structure inline comments for conditional sections (Tutorial, Concept, Hands-on Lab, Reference)
      6. Metadata Valid - Sidebar configuration: Modules → Weeks → Chapters, collapsible categories
- **Frontmatter fields**
  - `title`, `sidebar_label`, `tags`, `week`, `prerequisites`, `learning_objectives`, `estimated_time`, `slug`

---

## Section Structure
- Modules (Weeks) → Chapters
- Each chapter contains:
  1. Frontmatter (YAML)
  2. Optional MDX imports
  3. H1 Chapter Title
  4. Learning Objectives
  5. Prerequisites
  6. Introduction
  7. Core Content (Tutorial / Concept / Hands-on Lab / Reference)
  8. Hands-on Exercise
  9. Key Takeaways
  10. Troubleshooting (optional)
  11. Summary
  12. References
  13. Automatic prev/next navigation

---

## Research Approach
- **Research-Concurrent**
  - Generate content while sourcing references (APA-style citations)
  - Ensure sources are accurate and directly relevant to chapter topics
- **Phase Organization**
  - **Phase 0: Research & Discovery**
    - Six research areas:
      1. Docusaurus MDX Component Best Practices: SSR-compatible components, frontmatter access, ation Implementation: use AJV, parse frontmatter, format errors
  - **Phase 1: Design & Contracts**
    - Objectives:
      - Define data entities and validation rules
      - Create TypeScript interfaces for type safety
      - Generate JSON Schema for build-time validation
      - Document API contracts for MDX components
      - Provide quickstart guide for authors
    - Deliverables:
      - TypeScript interfaces and JSON Schemas
      - Component contract documentation
      - Quickstart guide with examples
  - **Phase 2: Foundation**
    - Outline module/week/chapter layout
    - Decide on content granularity and technical depth per module
    - Define folder and file naming conventions
    - Decide on Markdown vs MDX usage
  - **Phase 3: Analysis**
    - Implement templates with frontmatter, callouts, exercises, key takeaways
    - Configure Docusaurus sidebar and navigation
    - Ensure chapter metadata aligns with JSON Schema
  - **Phase 4: Synthesis**
    - Validate all chapters via automated build
    - QA: verify sidebar structure, prev/next navigation, exercise components, callouts, cross-links
    - Performance testing: page load <800 ms on 4G
    - Finalize APA-style references and citations

---

## Quality Validation
- Sidebar structure matches module → week → chapter hierarchy
- All frontmatter fields validated against JSON Schema
- Exercises, callouts, and code blocks render correctly
- Navigation links show adjacent chapter titles
- Terminology consistency across chapters
- Page load performance
- Cross-module prerequisite links verified
- Collapsible sections functional

---

## Decisions Needing Documentation
- Level of technical depth per module/week
- Content granularity per week
- Markdown vs MDX chapter format
- Collapsible sidebar configuration
- Chapter length constraints (max 3,000 words)
- APA-style citation formatting rules
- Frontmatter schema and validation strategy

---

## Testing Strategy
- Sidebar matches module → week → chapter
- Chapter frontmatter validated against schema
- Exercise block functionality and progressive hints tested
- Code block rendering and copy-to-clipboard verified
- Callout nesting and custom titles tested
- Prev/next navigation links display correctly
- Page load time measured (<800 ms)
- Cross-links (prerequisites, references) verified
- Build fails for invalid metadata or unclosed callouts

---

## Technical Details
- Research-Concurrent: content creation and sourcing references simultaneously
- APA Citation Style: follow Constitution guidelines
- Phase-based workflow ensures AI understands step-by-step what to create and validate
- All MDX components must support SSR, optional props, and frontmatter access
- Exercises track attempts and support collapsible hints
- JSON Schema validation integrated into build pipeline

## Response snapshot

I've successfully created the `plan.md` file with the provided implementation plan.

📋 Architectural decision detected: Technical depth and content granularity per module/week. Document reasoning and tradeoffs? Run `/sp.adr "Technical Depth and Content Granularity"`

📋 Architectural decision detected: Markdown vs MDX chapter format. Document reasoning and tradeoffs? Run `/sp.adr "Markdown vs MDX Chapter Format"`

📋 Architectural decision detected: Collapsible sidebar configuration. Document reasoning and tradeoffs? Run `/sp.adr "Collapsible Sidebar Configuration"`

📋 Architectural decision detected: Chapter length constraints (max 3,000 words). Document reasoning and tradeoffs? Run `/sp.adr "Chapter Length Constraints"`

📋 Architectural decision detected: APA-style citation formatting rules. Document reasoning and tradeoffs? Run `/sp.adr "APA Citation Formatting"`

📋 Architectural decision detected: Frontmatter schema and validation strategy. Document reasoning and tradeoffs? Run `/sp.adr "Frontmatter Schema and Validation"`

The implementation plan has been successfully documented in `specs/001-ai-robotics-textbook/plan.md`.
The next step is to generate an actionable task list based on this plan.

**Suggested Next Command:** `/sp.tasks`

## Outcome

- ✅ Impact: Detailed plan for the Physical AI & Humanoid Robotics textbook system created.
- 🧪 Tests: N/A
- 📁 Files: specs/001-ai-robotics-textbook/plan.md created and populated.
- 🔁 Next prompts: /sp.tasks, /sp.adr
- 🧠 Reflection: Successfully processed the user's detailed plan. Created `plan.md` and suggested ADRs based on the identified decisions. The system is now ready to generate tasks.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): N/A
