<!--
<SyncImpactReport>
  <VersionChange>
    <OldVersion>1.1.0</OldVersion>
    <NewVersion>2.0.0</NewVersion>
  </VersionChange>
  <ModifiedPrinciples>
    <Principle>All principles are considered modified or newly defined as part of this major update.</Principle>
  </ModifiedPrinciples>
  <AddedSections>
    <Section>All sections from the provided content are considered added or newly defined as part of this major update.</Section>
  </AddedSections>
  <RemovedSections>
    <Section>None</Section>
  </RemovedSections>
  <TemplatesRequiringUpdates>
    <Template path=".specify/templates/plan-template.md" status="⚠ pending"/>
    <Template path=".specify/templates/spec-template.md" status="⚠ pending"/>
    <Template path=".specify/templates/tasks-template.md" status="⚠ pending"/>
    <Template path=".specify/templates/commands/*.md" status="⚠ pending"/>
    <Template path="README.md" status="⚠ pending"/>
    <Template path="docs/quickstart.md" status="⚠ pending"/>
  </TemplatesRequiringUpdates>
  <FollowUpTODOs>
    <TODO>None</TODO>
  </FollowUpTODOs>
</SyncImpactReport>
-->
# AI/Spec-Driven Book Creation - Physical AI & Humanoid Robotics Course Constitution


## Core Principles


### Accuracy
Every technical explanation must be correct and verifiable.


### Clarity
Content must be understandable for students and beginner-friendly readers.


### Consistency
The entire book must follow one unified structure, tone, and development workflow.


### Quality Enforcement
All sections must satisfy the constitution before approval.


## Standards


### Writing & Content Standards
- Use simple, structured, and beginner-friendly explanations.
- Maintain consistent formatting across all chapters (headings, code blocks, lists).
- All technical content must be reproducible and correct.
- No plagiarism (all content must be original).
- Provide small examples where necessary, using short, clean code blocks.


### Coding Standards (Spec-Kit Plus & Claude Code)
- Every code block should include context on what it solves.
- Prefer clarity over complexity.


### Technology Stack Standards
- Frontend/Platform: Docusaurus
- Deployment: GitHub Pages
- Authoring Tools: Spec-Kit Plus + Claude Code


### Repository Standards
- Clean directory structure
- No unused files
- Use version control properly (commits should be meaningful)
- Branch naming conventions: `feature/<feature-name>`, `bugfix/<bug-description>`, `release/<version>`
- PR merge strategies: Squash and merge for feature branches, fast-forward for release branches
- Links to detailed repository guidelines: [Link to internal repo guidelines] <!-- Placeholder, can be updated later -->


## Architecture & Structure Standards


- Use a modular chapter structure (each topic in its own folder).
- Use reusable patterns for explanations (intro → breakdown → example → summary).
- Avoid anti-patterns such as:
  - Overly long pages
  - Repeated content
  - Unverified claims
  - Unstructured or mixed writing style


### Security Rules
- No sensitive, harmful, or non-public information.
- Do not include dangerous code, unsafe instructions, or anything harmful.
- Follow safe-content guidelines throughout the book.


### Error Handling & Edge Case Rules
- Explain common mistakes beginners might make.
- Include brief notes on troubleshooting where necessary.
- Do not include advanced or unnecessary edge cases unless relevant.
- Code examples must show safe handling whenever applicable (e.g., simple validation, fallback values).


### Testing Standards
- Basic test: The page must render correctly in Docusaurus without errors.
- Editorial test: Content must be readable and logically structured.
- Code test: Verify that every code example runs or makes sense.
- Consistency test: Must follow the same standards as all other chapters.


## Cross-Template Alignment
All dependent documentation and templates (plan-template.md, spec-template.md, tasks-template.md, commands/*.md, README.md) MUST be aligned with this constitution to ensure consistency across the project.


## Governance


- **Mandatory Rules Across ALL Features:**
  1. Consistency in format, tone, and structure
  2. Accuracy and clarity in all explanations
  3. Unified coding style and clean examples
  4. All sections must be testable and verifiable
  5. No harmful, sensitive, or incorrect content
  6. Pages must build successfully before submission
- **Success Criteria:**
  - All chapters follow this constitution.
  - Full book builds cleanly in Docusaurus.
  - Deployed successfully on GitHub Pages.
  - Clear, organized, high-quality writing throughout.
  - All coding examples are correct, simple, and helpful.


### Explicit Governance Procedures
- **Amendment Procedure**: Changes are proposed via pull requests, reviewed by core maintainers, and approved by a supermajority vote.
- **Versioning Policy**: This constitution follows semantic versioning (MAJOR.MINOR.PATCH).
  - MAJOR version increments for backward incompatible changes (e.g., removal of a core principle).
  - MINOR version increments for new principles, sections, or significantly expanded guidance.
  - PATCH version increments for clarifications, wording fixes, or non-semantic refinements.
- **Compliance Review**: Adherence is assessed through regular audits, peer reviews during development, and automated checks where pos

CONSTITUTION_VERSION: 2.0.0
RATIFICATION_DATE: 2025-12-04
LAST_AMENDED_DATE: 2025-12-04