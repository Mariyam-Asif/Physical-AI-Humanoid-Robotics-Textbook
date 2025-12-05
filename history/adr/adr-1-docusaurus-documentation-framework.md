---
adr_id: 1
adr_title: Docusaurus Documentation Framework
adr_status: Accepted
adr_date: 2025-12-05
---

# 1. Docusaurus Documentation Framework

## Context
The project requires a robust and maintainable platform for an AI Robotics textbook with structured content, interactive components, and deployment to GitHub Pages.

## Decision
Utilize Docusaurus as the core static site generator.
*   Framework: Docusaurus
*   Content Features: MDX support, structured navigation, versioning.
*   Deployment: GitHub Pages.

## Consequences
*   **Pros**: Rapid development, strong community support, excellent for content-heavy sites, built-in features for docs (search, versioning), reduced initial development effort, accelerates content publishing.
*   **Cons**: Can be opinionated regarding site structure, might require workarounds for highly customized UI/UX, potential learning curve for complex MDX component development beyond basic usage.

## Alternatives
*   Next.js (for custom solutions)
*   Gatsby (for complex data sourcing)
*   Pure static HTML/Markdown generation

## References
*   `specs/001-ai-robotics-textbook/plan.md`
