---
adr_id: 2
adr_title: Content Format Strategy
adr_status: Accepted
adr_date: 2025-12-05
---

# 2. Content Format Strategy

## Context
The textbook requires a flexible content format that supports rich, interactive learning experiences, including embedded components and structured data.

## Decision
Primarily use MDX for chapters, with Markdown as a fallback for simpler sections.
*   Primary Format: MDX
*   Fallback Format: Markdown
*   Interactive Elements: React components embedded directly.

## Consequences
*   **Pros**: High interactivity, supports custom UI elements, allows programmatic content generation, future-proof for richer features, engaging and effective learning environment.
*   **Cons**: Increased complexity for content authors compared to pure Markdown, potential for build issues if custom components are not robust or correctly implemented with Server-Side Rendering (SSR) considerations.

## Alternatives
*   Pure Markdown (simpler, less interactive)
*   Other rich text formats (e.g., AsciiDoc, reStructuredText)

## References
*   `specs/001-ai-robotics-textbook/plan.md`
