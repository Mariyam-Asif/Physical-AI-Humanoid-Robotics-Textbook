---
adr_id: 4
adr_title: Chapter Length Constraints
adr_status: Accepted
adr_date: 2025-12-05
---

# 4. Chapter Length Constraints

## Context
To maintain reader engagement, improve readability, and optimize performance for the AI Robotics textbook, content must be delivered in digestible segments.

## Decision
Enforce a maximum chapter length of 3,000 words.
*   Constraint: Maximum 3,000 words per chapter.
*   Enforcement: Integrated into content validation during the build pipeline.

## Consequences
*   **Pros**: Promotes conciseness, improves readability, maintains reader engagement by preventing cognitive overload, optimizes page load performance, encourages breaking down complex topics into smaller, more digestible chapters, easier content maintenance and updates, better SEO.
*   **Cons**: Requires authors to be disciplined in content creation, may necessitate more chapters for extensive topics, requiring careful content segmentation.

## Alternatives
*   No explicit length limit (risk of long, unreadable chapters).
*   Different length limits (e.g., higher word count, or dynamic based on topic complexity).

## References
*   `specs/001-ai-robotics-textbook/plan.md`
