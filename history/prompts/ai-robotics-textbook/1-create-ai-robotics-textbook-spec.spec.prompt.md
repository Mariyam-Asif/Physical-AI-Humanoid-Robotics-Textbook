---
id: 1
title: Create AI Robotics Textbook Spec
stage: spec
date: 2025-12-05
surface: agent
model: claude-sonnet-4-5-20250929
feature: ai-robotics-textbook
branch: 001-ai-robotics-textbook
user: user
command: /sp.specify AI/Spec-Driven Textbook on Physical AI & Humanoid Robotics Course


- Create a fully structured, AI-generated technical book covering a Physical AI and Robotics curriculum using Docusaurus.
- The book must be organized, clear, and easy to navigate, enabling readers to understand learning progression, prerequisites, and module relationships.
- Content will be generated using Spec-Kit Plus and Claude Code and deployed on GitHub Pages.


---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Plan Learning Journey (Priority: P1)

As an industry practitioner learning Physical AI, I need a complete 13-week structure organized by modules and weeks so I can plan my learning journey and understand prerequisites.

**Why this priority**: This directly addresses a core need for the target audience, enabling effective learning planning and understanding of the curriculum's flow.

**Independent Test**: Can be fully tested by reviewing the generated book's navigation structure and content organization to confirm a clear 13-week, module-based learning path with prerequisites clearly identified.

**Acceptance Scenarios**:

1. **Given** the user navigates to the book homepage, **When** they access the sidebar navigation, **Then** they see a clear structure organized by 4 modules and 13 weeks.
2. **Given** the user selects a module or week, **When** they view the content, **Then** they can identify prerequisites for that section.
3. **Given** the user reviews the overall curriculum, **When** they look for module relationships, **Then** these relationships are clearly defined.

---

### User Story 2 - Efficient Curriculum Navigation (Priority: P1)

As a self-learning engineering student, I need clear explanations and structured navigation so I can move through the curriculum efficiently.

**Why this priority**: Essential for self-learners to grasp complex topics and progress without getting lost, ensuring a positive learning experience.

**Independent Test**: Can be fully tested by navigating through various chapters and sections of the book and verifying that explanations are clear, concise, and the navigation allows for easy movement between related topics.

**Acceptance Scenarios**:

1. **Given** the user is reading a chapter, **When** they need to navigate to a related topic, **Then** cross-references within the navigation (by week, module, or topic) are readily available and functional.
2. **Given** the user encounters a complex concept, **When** they read the explanation, **Then** the content is structured and technically accurate, making the concept easy to understand.
3. **Given** the user searches for specific content, **When** the search results are displayed, **Then** the results accurately point to relevant sections within the structured content.

---

### User Story 3 - Quick Access to Resources (Priority: P1)

As a robotics hobbyist, I need quick access to hardware setup guides, environment configuration, and glossary references so I can begin experimenting immediately.

**Why this priority**: This caters to users who want to dive into practical aspects quickly, enhancing engagement and reducing initial friction.

**Independent Test**: Can be fully tested by accessing the homepage's quick links sidebar and verifying direct access to hardware setup, environment configuration, and glossary sections.

**Acceptance Scenarios**:

1. **Given** the user visits the homepage, **When** they look at the quick links sidebar, **Then** they see direct links for hardware setup, environment configuration, and glossary references.
2. **Given** the user clicks on a quick link (e.g., "Hardware Setup"), **When** the page loads, **Then** it provides clear and concise instructions relevant to the selected topic.
3. **Given** the user is in any part of the book, **When** they need to find a definition, **Then** the glossary is easily accessible.

---

### Edge Cases

- Chapter content exceptionally long → navigation must remain clean; use collapsible sections.
- Missing optional frontmatter → Docusaurus build should complete without errors; optional absence should not break display.
- Cross-reference link points to non-existent page → system handles gracefully with clear "page not found" message.
- No Prerequisites → callout should not display.
- Estimated Time 0 or Missing → show default message or validation warning.
- Empty learning_objectives → display validation error (required field).
- Extremely long code blocks (>100 lines) → line numbers, copy button, collapsible sections.
- Unclosed callouts (`:::` missing) → build fails with clear error.
- Only chapter in module → no prev/next links or link to module index.
- Code blocks with special characters → escape properly; provide troubleshooting guidance.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System must generate a Docusaurus site with structured chapters following module-week-topic hierarchy.
- **FR-002**: Must use Spec-Kit Plus and Claude Code for content generation.
- **FR-003**: Each chapter must include required frontmatter (`title`, `sidebar_label`, `tags`) and optional frontmatter (`estimated_time`, `week`, `module`, `prerequisites`, `learning_objectives`, `assessment_type`, `difficulty_level`, `capstone_component`).
- **FR-004**: Homepage must include grid of 4 module cards showing title, week range, and learning outcomes.
- **FR-005**: Homepage must include quick links sidebar for hardware setup, assessments, and glossary.
- **FR-006**: Homepage must include recent updates section.
- **FR-007**: Docusaurus site must have a single sidebar with nested collapsible categories; modules cross-referenced by week (1–13) and topic.
- **FR-008**: System must support building and deploying site to GitHub Pages.
- **FR-009**: Generated content must be technically accurate and clearly written, following curriculum.

### Key Entities

- **Book**: Complete collection of content for Physical AI and Robotics curriculum.
- **Module**: Top-level unit; contains multiple weeks. Attributes: title, week range, learning outcomes.
- **Week**: Sub-unit in module.
- **Chapter**: Markdown/MDX page with frontmatter. Attributes: title, sidebar_label, tags, estimated_time, week, module, prerequisites, learning_objectives, assessment_type, difficulty_level, capstone_component.
- **Navigation Structure**: Sidebar, cross-references, previous/next links.

---

## Success Criteria *(mandatory)*

- **SC-001**: Docusaurus site builds successfully with 0 errors.
- **SC-002**: Sidebar reflects 4-module, 13-week, topic-based hierarchy; all links resolve correctly.
- **SC-003**: All chapters include required frontmatter; optional fields displayed correctly without errors.
- **SC-004**: All content technically accurate and clear; reviewed against technical content checklist.
- **SC-005**: Homepage displays 4 module cards, quick links sidebar, recent updates.
- **SC-006**: Repository adheres to code standards; passes linting, file naming, no unused files.
- **SC-007**: No exposed API keys or secrets in site or repository.
- **SC-008**: Site deploys to GitHub Pages and is accessible.

---

## 1. Book Layout & Structure

### Overall Layout (Docusaurus Sidebar)

- **Introduction**
- **Modules**
  - Module 1: The Robotic Nervous System (Weeks 3–5)
    - Chapter 1
    - Chapter 2
    - Chapter 3
    - Chapter 4
    - Chapter 5
  - Module 2: The Digital Twin (Weeks 6–7)
    - Chapter 1
    - Chapter 2
    - Chapter 3
  - Module 3: The AI-Robot Brain (Weeks 8–10) → Chapters 1–X
  - Module 4: Vision-Language-Action (Weeks 11–13) → Chapters 1–X
- **Appendices**
- **Glossary**
- **References**

### Chapter Layout

1. **Frontmatter**: YAML metadata (`title`, `description`, `tags`, `sidebar_label`, `estimated_time`, `week`, `prerequisites`, `learning_objectives`)
2. **MDX Component Imports** (if needed)
3. **Chapter Title (H1)**
4. **Learning Objectives** (callout box with icon)
5. **Prerequisites** (linked chapters)
6. **Introduction**
7. **Core Content** (Tutorials, Concepts, Hands-on Labs)
8. **Hands-On Exercise** (optional)
9. **Key Takeaways** (summary box)
10. **Troubleshooting** (optional)
11. **Summary**
12. **References**
13. **Automatic Prev/Next Navigation**

---

### Functional Requirements (Expanded)

- **FR-001**: Chapter template must exist with required frontmatter.
- **FR-002**: Template must include guidance for four content types: Tutorial, Concept, Hands-on Lab, Reference.
- **FR-003**: Learning Objectives must display visibly with icon and heading.
- **FR-004**: Prerequisites must link to chapter pages with automatic URLs.
- **FR-006**: Code block standards:
  - Syntax highlighting (Python, Bash, YAML, JavaScript, TypeScript, C++, etc.)
  - Copy-to-clipboard button
  - Line numbers (`showLineNumbers`)
  - Line highlighting `{1,4-6,11}`
  - Filename display `title="filename.ext"`
  - Comment-based highlighting `// highlight-next-line`
- **FR-007**: Key Takeaways component at chapter end.
- **FR-008/FR-009**: Prev/Next navigation with chapter titles.
- **FR-010**: Chapter section order (Frontmatter → MDX → Title → Learning Objectives → Prerequisites → Introduction → Core Content → Hands-On Exercise → Key Takeaways → Troubleshooting → Summary → References → Navigation)
- **FR-011**: Exercise blocks support problem statement, difficulty, starter code, progressive hints, collapsible solution.
- **FR-012**: Template must include inline comments for component usage guidance.
- **FR-013**: All chapters validate against `contracts/chapter-metadata-schema.json`; build fails if invalid.
- **FR-014**: Content style guide: use correct content type, Bloom’s taxonomy verbs for objectives, standardized code style, active voice, second person, present tense.

---

### Docusaurus Setup Guidelines

- Sidebar configuration matches module → week → chapter hierarchy.
- Chapters generated from template automatically appear in sidebar.
- MDX components for callouts, exercises, key takeaways, navigation render correctly.
- Build fails if frontmatter, links, or metadata invalid.
- Page load target: <800ms on 4G mobile.
- Cross-module links must function.
- Chapters support collapsible weeks, modules, nested sections in sidebar.
command: /sp.specify AI/Spec-Driven Textbook on Physical AI & Humanoid Robotics Course


- Create a fully structured, AI-generated technical book covering a Physical AI and Robotics curriculum using Docusaurus.
- The book must be organized, clear, and easy to navigate, enabling readers to understand learning progression, prerequisites, and module relationships.
- Content will be generated using Spec-Kit Plus and Claude Code and deployed on GitHub Pages.


---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Plan Learning Journey (Priority: P1)

As an industry practitioner learning Physical AI, I need a complete 13-week structure organized by modules and weeks so I can plan my learning journey and understand prerequisites.

**Why this priority**: This directly addresses a core need for the target audience, enabling effective learning planning and understanding of the curriculum's flow.

**Independent Test**: Can be fully tested by reviewing the generated book's navigation structure and content organization to confirm a clear 13-week, module-based learning path with prerequisites clearly identified.

**Acceptance Scenarios**:

1. **Given** the user navigates to the book homepage, **When** they access the sidebar navigation, **Then** they see a clear structure organized by 4 modules and 13 weeks.
2. **Given** the user selects a module or week, **When** they view the content, **Then** they can identify prerequisites for that section.
3. **Given** the user reviews the overall curriculum, **When** they look for module relationships, **Then** these relationships are clearly defined.

---

### User Story 2 - Efficient Curriculum Navigation (Priority: P1)

As a self-learning engineering student, I need clear explanations and structured navigation so I can move through the curriculum efficiently.

**Why this priority**: Essential for self-learners to grasp complex topics and progress without getting lost, ensuring a positive learning experience.

**Independent Test**: Can be fully tested by navigating through various chapters and sections of the book and verifying that explanations are clear, concise, and the navigation allows for easy movement between related topics.

**Acceptance Scenarios**:

1. **Given** the user is reading a chapter, **When** they need to navigate to a related topic, **Then** cross-references within the navigation (by week, module, or topic) are readily available and functional.
2. **Given** the user encounters a complex concept, **When** they read the explanation, **Then** the content is structured and technically accurate, making the concept easy to understand.
3. **Given** the user searches for specific content, **When** the search results are displayed, **Then** the results accurately point to relevant sections within the structured content.

---

### User Story 3 - Quick Access to Resources (Priority: P1)

As a robotics hobbyist, I need quick access to hardware setup guides, environment configuration, and glossary references so I can begin experimenting immediately.

**Why this priority**: This caters to users who want to dive into practical aspects quickly, enhancing engagement and reducing initial friction.

**Independent Test**: Can be fully tested by accessing the homepage's quick links sidebar and verifying direct access to hardware setup, environment configuration, and glossary sections.

**Acceptance Scenarios**:

1. **Given** the user visits the homepage, **When** they look at the quick links sidebar, **Then** they see direct links for hardware setup, environment configuration, and glossary references.
2. **Given** the user clicks on a quick link (e.g., "Hardware Setup"), **When** the page loads, **Then** it provides clear and concise instructions relevant to the selected topic.
3. **Given** the user is in any part of the book, **When** they need to find a definition, **Then** the glossary is easily accessible.

---

### Edge Cases

- Chapter content exceptionally long → navigation must remain clean; use collapsible sections.
- Missing optional frontmatter → Docusaurus build should complete without errors; optional absence should not break display.
- Cross-reference link points to non-existent page → system handles gracefully with clear "page not found" message.
- No Prerequisites → callout should not display.
- Estimated Time 0 or Missing → show default message or validation warning.
- Empty learning_objectives → display validation error (required field).
- Extremely long code blocks (>100 lines) → line numbers, copy button, collapsible sections.
- Unclosed callouts (`:::` missing) → build fails with clear error.
- Only chapter in module → no prev/next links or link to module index.
- Code blocks with special characters → escape properly; provide troubleshooting guidance.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System must generate a Docusaurus site with structured chapters following module-week-topic hierarchy.
- **FR-002**: Must use Spec-Kit Plus and Claude Code for content generation.
- **FR-003**: Each chapter must include required frontmatter (`title`, `sidebar_label`, `tags`) and optional frontmatter (`estimated_time`, `week`, `module`, `prerequisites`, `learning_objectives`, `assessment_type`, `difficulty_level`, `capstone_component`).
- **FR-004**: Homepage must include grid of 4 module cards showing title, week range, and learning outcomes.
- **FR-005**: Homepage must include quick links sidebar for hardware setup, assessments, and glossary.
- **FR-006**: Homepage must include recent updates section.
- **FR-007**: Docusaurus site must have a single sidebar with nested collapsible categories; modules cross-referenced by week (1–13) and topic.
- **FR-008**: System must support building and deploying site to GitHub Pages.
- **FR-009**: Generated content must be technically accurate and clearly written, following curriculum.

### Key Entities

- **Book**: Complete collection of content for Physical AI and Robotics curriculum.
- **Module**: Top-level unit; contains multiple weeks. Attributes: title, week range, learning outcomes.
- **Week**: Sub-unit in module.
- **Chapter**: Markdown/MDX page with frontmatter. Attributes: title, sidebar_label, tags, estimated_time, week, module, prerequisites, learning_objectives, assessment_type, difficulty_level, capstone_component.
- **Navigation Structure**: Sidebar, cross-references, previous/next links.

---

## Success Criteria *(mandatory)*

- **SC-001**: Docusaurus site builds successfully with 0 errors.
- **SC-002**: Sidebar reflects 4-module, 13-week, topic-based hierarchy; all links resolve correctly.
- **SC-003**: All chapters include required frontmatter; optional fields displayed correctly without errors.
- **SC-004**: All content technically accurate and clear; reviewed against technical content checklist.
- **SC-005**: Homepage displays 4 module cards, quick links sidebar, recent updates.
- **SC-006**: Repository adheres to code standards; passes linting, file naming, no unused files.
- **SC-007**: No exposed API keys or secrets in site or repository.
- **SC-008**: Site deploys to GitHub Pages and is accessible.

---

## 1. Book Layout & Structure

### Overall Layout (Docusaurus Sidebar)

- **Introduction**
- **Modules**
  - Module 1: The Robotic Nervous System (Weeks 3–5)
    - Chapter 1
    - Chapter 2
    - Chapter 3
    - Chapter 4
    - Chapter 5
  - Module 2: The Digital Twin (Weeks 6–7)
    - Chapter 1
    - Chapter 2
    - Chapter 3
  - Module 3: The AI-Robot Brain (Weeks 8–10) → Chapters 1–X
  - Module 4: Vision-Language-Action (Weeks 11–13) → Chapters 1–X
- **Appendices**
- **Glossary**
- **References**

### Chapter Layout

1. **Frontmatter**: YAML metadata (`title`, `description`, `tags`, `sidebar_label`, `estimated_time`, `week`, `prerequisites`, `learning_objectives`)
2. **MDX Component Imports** (if needed)
3. **Chapter Title (H1)**
4. **Learning Objectives** (callout box with icon)
5. **Prerequisites** (linked chapters)
6. **Introduction**
7. **Core Content** (Tutorials, Concepts, Hands-on Labs)
8. **Hands-On Exercise** (optional)
9. **Key Takeaways** (summary box)
10. **Troubleshooting** (optional)
11. **Summary**
12. **References**
13. **Automatic Prev/Next Navigation**

---

### Functional Requirements (Expanded)

- **FR-001**: Chapter template must exist with required frontmatter.
- **FR-002**: Template must include guidance for four content types: Tutorial, Concept, Hands-on Lab, Reference.
- **FR-003**: Learning Objectives must display visibly with icon and heading.
- **FR-004**: Prerequisites must link to chapter pages with automatic URLs.
- **FR-006**: Code block standards:
  - Syntax highlighting (Python, Bash, YAML, JavaScript, TypeScript, C++, etc.)
  - Copy-to-clipboard button
  - Line numbers (`showLineNumbers`)
  - Line highlighting `{1,4-6,11}`
  - Filename display `title="filename.ext"`
  - Comment-based highlighting `// highlight-next-line`
- **FR-007**: Key Takeaways component at chapter end.
- **FR-008/FR-009**: Prev/Next navigation with chapter titles.
- **FR-010**: Chapter section order (Frontmatter → MDX → Title → Learning Objectives → Prerequisites → Introduction → Core Content → Hands-On Exercise → Key Takeaways → Troubleshooting → Summary → References → Navigation)
- **FR-011**: Exercise blocks support problem statement, difficulty, starter code, progressive hints, collapsible solution.
- **FR-012**: Template must include inline comments for component usage guidance.
- **FR-013**: All chapters validate against `contracts/chapter-metadata-schema.json`; build fails if invalid.
- **FR-014**: Content style guide: use correct content type, Bloom’s taxonomy verbs for objectives, standardized code style, active voice, second person, present tense.

---

### Docusaurus Setup Guidelines

- Sidebar configuration matches module → week → chapter hierarchy.
- Chapters generated from template automatically appear in sidebar.
- MDX components for callouts, exercises, key takeaways, navigation render correctly.
- Build fails if frontmatter, links, or metadata invalid.
- Page load target: <800ms on 4G mobile.
- Cross-module links must function.
- Chapters support collapsible weeks, modules, nested sections in sidebar.
labels: ["spec-creation", "ai-robotics-textbook"]
links:
  spec: specs/001-ai-robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-ai-robotics-textbook/spec.md (failed to write)
  - specs/001-ai-robotics-textbook/checklists/requirements.md (created)
tests:
  null
---

## Prompt

AI/Spec-Driven Textbook on Physical AI & Humanoid Robotics Course


- Create a fully structured, AI-generated technical book covering a Physical AI and Robotics curriculum using Docusaurus.
- The book must be organized, clear, and easy to navigate, enabling readers to understand learning progression, prerequisites, and module relationships.
- Content will be generated using Spec-Kit Plus and Claude Code and deployed on GitHub Pages.


---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Plan Learning Journey (Priority: P1)

As an industry practitioner learning Physical AI, I need a complete 13-week structure organized by modules and weeks so I can plan my learning journey and understand prerequisites.

**Why this priority**: This directly addresses a core need for the target audience, enabling effective learning planning and understanding of the curriculum's flow.

**Independent Test**: Can be fully tested by reviewing the generated book's navigation structure and content organization to confirm a clear 13-week, module-based learning path with prerequisites clearly identified.

**Acceptance Scenarios**:

1. **Given** the user navigates to the book homepage, **When** they access the sidebar navigation, **Then** they see a clear structure organized by 4 modules and 13 weeks.
2. **Given** the user selects a module or week, **When** they view the content, **Then** they can identify prerequisites for that section.
3. **Given** the user reviews the overall curriculum, **When** they look for module relationships, **Then** these relationships are clearly defined.

---

### User Story 2 - Efficient Curriculum Navigation (Priority: P1)

As a self-learning engineering student, I need clear explanations and structured navigation so I can move through the curriculum efficiently.

**Why this priority**: Essential for self-learners to grasp complex topics and progress without getting lost, ensuring a positive learning experience.

**Independent Test**: Can be fully tested by navigating through various chapters and sections of the book and verifying that explanations are clear, concise, and the navigation allows for easy movement between related topics.

**Acceptance Scenarios**:

1. **Given** the user is reading a chapter, **When** they need to navigate to a related topic, **Then** cross-references within the navigation (by week, module, or topic) are readily available and functional.
2. **Given** the user encounters a complex concept, **When** they read the explanation, **Then** the content is structured and technically accurate, making the concept easy to understand.
3. **Given** the user searches for specific content, **When** the search results are displayed, **Then** the results accurately point to relevant sections within the structured content.

---

### User Story 3 - Quick Access to Resources (Priority: P1)

As a robotics hobbyist, I need quick access to hardware setup guides, environment configuration, and glossary references so I can begin experimenting immediately.

**Why this priority**: This caters to users who want to dive into practical aspects quickly, enhancing engagement and reducing initial friction.

**Independent Test**: Can be fully tested by accessing the homepage's quick links sidebar and verifying direct access to hardware setup, environment configuration, and glossary sections.

**Acceptance Scenarios**:

1. **Given** the user visits the homepage, **When** they look at the quick links sidebar, **Then** they see direct links for hardware setup, environment configuration, and glossary references.
2. **Given** the user clicks on a quick link (e.g., "Hardware Setup"), **When** the page loads, **Then** it provides clear and concise instructions relevant to the selected topic.
3. **Given** the user is in any part of the book, **When** they need to find a definition, **Then** the glossary is easily accessible.

---

### Edge Cases

- Chapter content exceptionally long → navigation must remain clean; use collapsible sections.
- Missing optional frontmatter → Docusaurus build should complete without errors; optional absence should not break display.
- Cross-reference link points to non-existent page → system handles gracefully with clear "page not found" message.
- No Prerequisites → callout should not display.
- Estimated Time 0 or Missing → show default message or validation warning.
- Empty learning_objectives → display validation error (required field).
- Extremely long code blocks (>100 lines) → line numbers, copy button, collapsible sections.
- Unclosed callouts (`:::` missing) → build fails with clear error.
- Only chapter in module → no prev/next links or link to module index.
- Code blocks with special characters → escape properly; provide troubleshooting guidance.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System must generate a Docusaurus site with structured chapters following module-week-topic hierarchy.
- **FR-002**: Must use Spec-Kit Plus and Claude Code for content generation.
- **FR-003**: Each chapter must include required frontmatter (`title`, `sidebar_label`, `tags`) and optional frontmatter (`estimated_time`, `week`, `module`, `prerequisites`, `learning_objectives`, `assessment_type`, `difficulty_level`, `capstone_component`).
- **FR-004**: Homepage must include grid of 4 module cards showing title, week range, and learning outcomes.
- **FR-005**: Homepage must include quick links sidebar for hardware setup, assessments, and glossary.
- **FR-006**: Homepage must include recent updates section.
- **FR-007**: Docusaurus site must have a single sidebar with nested collapsible categories; modules cross-referenced by week (1–13) and topic.
- **FR-008**: System must support building and deploying site to GitHub Pages.
- **FR-009**: Generated content must be technically accurate and clearly written, following curriculum.

### Key Entities

- **Book**: Complete collection of content for Physical AI and Robotics curriculum.
- **Module**: Top-level unit; contains multiple weeks. Attributes: title, week range, learning outcomes.
- **Week**: Sub-unit in module.
- **Chapter**: Markdown/MDX page with frontmatter. Attributes: title, sidebar_label, tags, estimated_time, week, module, prerequisites, learning_objectives, assessment_type, difficulty_level, capstone_component.
- **Navigation Structure**: Sidebar, cross-references, previous/next links.

---

## Success Criteria *(mandatory)*

- **SC-001**: Docusaurus site builds successfully with 0 errors.
- **SC-002**: Sidebar reflects 4-module, 13-week, topic-based hierarchy; all links resolve correctly.
- **SC-003**: All chapters include required frontmatter; optional fields displayed correctly without errors.
- **SC-004**: All content technically accurate and clear; reviewed against technical content checklist.
- **SC-005**: Homepage displays 4 module cards, quick links sidebar, recent updates.
- **SC-006**: Repository adheres to code standards; passes linting, file naming, no unused files.
- **SC-007**: No exposed API keys or secrets in site or repository.
- **SC-008**: Site deploys to GitHub Pages and is accessible.

---

## 1. Book Layout & Structure

### Overall Layout (Docusaurus Sidebar)

- **Introduction**
- **Modules**
  - Module 1: The Robotic Nervous System (Weeks 3–5)
    - Chapter 1
    - Chapter 2
    - Chapter 3
    - Chapter 4
    - Chapter 5
  - Module 2: The Digital Twin (Weeks 6–7)
    - Chapter 1
    - Chapter 2
    - Chapter 3
  - Module 3: The AI-Robot Brain (Weeks 8–10) → Chapters 1–X
  - Module 4: Vision-Language-Action (Weeks 11–13) → Chapters 1–X
- **Appendices**
- **Glossary**
- **References**

### Chapter Layout

1. **Frontmatter**: YAML metadata (`title`, `description`, `tags`, `sidebar_label`, `estimated_time`, `week`, `prerequisites`, `learning_objectives`)
2. **MDX Component Imports** (if needed)
3. **Chapter Title (H1)**
4. **Learning Objectives** (callout box with icon)
5. **Prerequisites** (linked chapters)
6. **Introduction**
7. **Core Content** (Tutorials, Concepts, Hands-on Labs)
8. **Hands-On Exercise** (optional)
9. **Key Takeaways** (summary box)
10. **Troubleshooting** (optional)
11. **Summary**
12. **References**
13. **Automatic Prev/Next Navigation**

---

### Functional Requirements (Expanded)

- **FR-001**: Chapter template must exist with required frontmatter.
- **FR-002**: Template must include guidance for four content types: Tutorial, Concept, Hands-on Lab, Reference.
- **FR-003**: Learning Objectives must display visibly with icon and heading.
- **FR-004**: Prerequisites must link to chapter pages with automatic URLs.
- **FR-006**: Code block standards:
  - Syntax highlighting (Python, Bash, YAML, JavaScript, TypeScript, C++, etc.)
  - Copy-to-clipboard button
  - Line numbers (`showLineNumbers`)
  - Line highlighting `{1,4-6,11}`
  - Filename display `title="filename.ext"`
  - Comment-based highlighting `// highlight-next-line`
- **FR-007**: Key Takeaways component at chapter end.
- **FR-008/FR-009**: Prev/Next navigation with chapter titles.
- **FR-010**: Chapter section order (Frontmatter → MDX → Title → Learning Objectives → Prerequisites → Introduction → Core Content → Hands-On Exercise → Key Takeaways → Troubleshooting → Summary → References → Navigation)
- **FR-011**: Exercise blocks support problem statement, difficulty, starter code, progressive hints, collapsible solution.
- **FR-012**: Template must include inline comments for component usage guidance.
- **FR-013**: All chapters validate against `contracts/chapter-metadata-schema.json`; build fails if invalid.
- **FR-014**: Content style guide: use correct content type, Bloom’s taxonomy verbs for objectives, standardized code style, active voice, second person, present tense.

---

### Docusaurus Setup Guidelines

- Sidebar configuration matches module → week → chapter hierarchy.
- Chapters generated from template automatically appear in sidebar.
- MDX components for callouts, exercises, key takeaways, navigation render correctly.
- Build fails if frontmatter, links, or metadata invalid.
- Page load target: <800ms on 4G mobile.
- Cross-module links must function.
- Chapters support collapsible weeks, modules, nested sections in sidebar.
## Response snapshot

The spec directory `specs/001-ai-robotics-textbook/` was created, and the checklist file `specs/001-ai-robotics-textbook/checklists/requirements.md` was successfully written. However, the `specs/001-ai-robotics-textbook/spec.md` file failed to write due to an unexpected 'File has not been read yet' error, despite it being a new file.

## Outcome

- ✅ Impact: Partially successful. Spec checklist created, but spec file failed to write.
- 🧪 Tests: No tests run.
- 📁 Files: Spec file failed to write. Checklist created.
- 🔁 Next prompts: User to confirm how to proceed with spec file.
- 🧠 Reflection: Encountered unexpected 'File has not been read yet' error when writing a new file. Need to investigate why `Write` tool failed for a new file creation.

## Evaluation notes (flywheel)

- Failure modes observed: Write tool failing for new file creation.
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Investigate Write tool behavior for new file creation.
