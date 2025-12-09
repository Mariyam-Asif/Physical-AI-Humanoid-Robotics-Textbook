---
description: "Task list for AI Robotics Textbook Platform implementation"
---

# Tasks: AI Robotics Textbook Platform

**Input**: Design documents from `/specs/001-ai-robotics-textbook/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: This project uses a TDD approach. Tests are implicitly part of the implementation tasks where verification is stated.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Docasaurus Setup tasks)

**Purpose**: Project initialization and basic Docusaurus structure

- [x] T001 Initialize Docusaurus project in current directory (requires `npm init docusaurus`)
- [x] T002 Install Docusaurus dependencies (e.g., `npm install`)
- [x] T003 Configure `docusaurus.config.ts` for basic site metadata (title, tagline): `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docusaurus.config.ts`
- [x] T004 Configure `docusaurus.config.ts` for basic theme settings (navbar, footer): `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docusaurus.config.ts`
- [x] T005 Create `src/components/` directory: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/components`
- [x] T006 Create `src/theme/` directory: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/theme`
- [x] T007 Create `schemas/` directory: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\schemas`
- [x] T008 Create `chapter-metadata-schema.json` schema file: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\schemas/chapter-metadata-schema.json`
- [x] T009 Create `templates/` directory: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\templates`
- [x] T010 Create `chapter-template.md` file: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\templates/chapter-template.md`
- [x] T011 Configure `sidebars.ts` for initial "Introduction" and "Modules" categories: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\sidebars.ts`
- [x] T012 Add basic `README.md` file: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\README.md`
- [x] T013 Add basic `.gitignore` file: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\.gitignore`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T014 Integrate JSON Schema validation library (e.g., AJV) into the project
- [x] T015 Configure Docusaurus build for chapter frontmatter validation using `schemas/chapter-metadata-schema.json`
- [x] T016 [P] [US-FOUND] Write failing tests for `Callout` component: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/components/mdx/__tests__/Callout.test.tsx` (example path)
- [x] T017 [P] Develop a custom MDX `Callout` component: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/components/mdx/Callout.tsx`
- [x] T018 [P] [US-FOUND] Write failing tests for `KeyTakeaways` component: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/components/mdx/__tests__/KeyTakeaways.test.tsx` (example path)
- [x] T019 [P] Develop a custom MDX `KeyTakeaways` component: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/components/mdx/KeyTakeaways.tsx`
- [x] T020 [P] [US-FOUND] Write failing tests for `ExerciseBlock` component: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/components/mdx/__tests__/ExerciseBlock.test.tsx` (example path)
- [x] T021 [P] Develop a custom MDX `Exercise` component: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/components/mdx/Exercise.tsx`
- [x] T022 Ensure custom MDX components are SSR-compatible
- [x] T023 Configure Docusaurus to correctly parse and render custom MDX components
- [x] T024 [P] Swizzle Docusaurus Navbar component for custom styling/behavior: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/theme/Navbar/Content/index.tsx` (example)

---

## Phase 3: User Story 1 - Plan Learning Journey (Priority: P1) 🎯 MVP

**Goal**: As an industry practitioner learning Physical AI, I need a complete 13-week structure organized by modules and weeks so I can plan my learning journey and understand prerequisites.

**Independent Test**: Review the generated book's navigation structure and content organization to confirm a clear 13-week, module-based learning path with prerequisites clearly identified.

### Implementation for User Story 1

- [x] T025 Create `_category_.json` files for all 4 modules: `docs/module-1-the-robotic-nervous-system-ros-2-weeks-3-5/_category_.json`, `docs/module-2-the-digital-twin-gazebo-unity-weeks-6-7/_category_.json`, `docs/module-3-the-ai-robot-brain-nvidia-isaac-weeks-8-10/_category_.json`, `docs/module-4-vision-language-action-weeks-11-13/_category_.json`
- [x] T026 Update `sidebars.ts` to include the 4 modules with their week ranges: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\sidebars.ts`
- [x] T027 Create an introductory `docs/introduction.mdx` page: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docs/introduction.mdx`
- [x] T028 Create `docs/glossary.mdx` page: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docs/glossary.mdx`
- [x] T029 Create `docs/references.mdx` page: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docs/references.mdx`
- [x] T030 Generate placeholder chapter files (e.g., `chapter-1.mdx`) for each module using `templates/chapter-template.md`
- [x] T031 [P] Swizzle Docusaurus Sidebar component for custom rendering/week display: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/theme/DocSidebar/Desktop/index.tsx` (example)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Efficient Curriculum Navigation (Priority: P1)

**Goal**: As a self-learning engineering student, I need clear explanations and structured navigation so I can move through the curriculum efficiently.

**Independent Test**: Navigate through various chapters and sections of the book and verify that explanations are clear, concise, and the navigation allows for easy movement between related topics.

### Implementation for User Story 2

- [x] T032 Customize `docusaurus.config.ts` to enable Docusaurus search functionality: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docusaurus.config.ts`
- [x] T033 Implement custom styling for `Callout` and `KeyTakeaways` components in `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/css/custom.css` (or similar)
- [x] T034 Configure Docusaurus for syntax highlighting for code blocks (using `docusaurus.config.ts` and prism-react-renderer themes): `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docusaurus.config.ts`
- [x] T034 Configure Docusaurus for syntax highlighting for code blocks (using `docusaurus.config.ts` and prism-react-renderer themes): `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docusaurus.config.ts`
- [x] T035 Implement copy-to-clipboard functionality for code blocks (may involve swizzling `CodeBlock` component): `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/theme/CodeBlock/index.tsx` (example)
- [x] T036 Enable line numbers and line highlighting for code blocks (using `docusaurus.config.ts` and MDX `metastring`): `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docusaurus.config.ts`
- [x] T037 Verify `prev/next` chapter navigation functions correctly and displays chapter titles
- [ ] T038 Ensure all chapter files adhere to the specified chapter layout and content style guide

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Quick Access to Resources (Priority: P1)

**Goal**: As a robotics hobbyist, I need quick access to hardware setup guides, environment configuration, and glossary references so I can begin experimenting immediately.

**Independent Test**: Access the homepage's quick links sidebar and verify direct access to hardware setup, environment configuration, and glossary sections.

### Implementation for User Story 3

- [ ] T039 Create `ModuleCard` React component: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/components/ModuleCard.tsx`
- [ ] T040 Integrate `ModuleCard` components into the Docusaurus homepage: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/pages/index.tsx`
- [ ] T041 Implement a quick links sidebar on the homepage (e.g., in `src/pages/index.tsx` or a custom component) for hardware setup, assessments, and glossary
- [ ] T042 Add a "Recent Updates" section to the homepage: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\src/pages/index.tsx`
- [ ] T043 Create placeholder `docs/hardware-setup.mdx` chapter: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docs/hardware-setup.mdx`
- [ ] T044 Create placeholder `docs/environment-config.mdx` chapter: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\docs/environment-config.mdx`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T045 Create GitHub Actions workflow file for Docusaurus build: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\.github/workflows/deploy.yml`
- [ ] T046 Configure GitHub Pages deployment within the workflow: `C:\Users\mariy\OneDrive\Documents\AI SPEC-DRIVEN HACKATHON\.github/workflows/deploy.yml`
- [ ] T047 Verify deployment success and access to GitHub Pages
- [ ] T048 Optimize image assets and implement lazy loading across the site
- [ ] T049 Integrate Lighthouse CI into the build pipeline for performance monitoring
- [ ] T050 Conduct a thorough review of the repository against code standards (linting, formatting, file naming)
- [ ] T051 Verify no exposed API keys or secrets in the site or repository
- [ ] T052 Implement basic accessibility checks for custom MDX components
- [ ] T053 Review content for accessibility guidelines (image alt text, semantic headings)
- [ ] T054 Document content creation workflow and guidelines
- [ ] T055 Create a runbook for diagnosing Docusaurus build failures
- [ ] T056 Run a full Docusaurus build (`npm run build`) and address any errors (SC-001)
- [ ] T057 Manually verify all acceptance scenarios for US1, US2, US3

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together (if tests requested):
Task: "Contract test for [endpoint] in tests/contract/test_[name].py"
Task: "Integration test for [user journey] in tests/integration/test_[name].py"

# Launch all models for User Story 1 together:
Task: "Create [Entity1] model in src/models/[entity1].py"
Task: "Create [Entity2] model in src/models/[entity2].py"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   2. Developer B: User Story 2
   2. Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
