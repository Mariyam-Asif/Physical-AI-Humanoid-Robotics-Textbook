---
adr_id: 3
adr_title: Metadata Validation and Schema Evolution
adr_status: Accepted
adr_date: 2025-12-05
---

# 3. Metadata Validation and Schema Evolution

## Context
Ensuring data consistency and preventing malformed content is critical for the textbook, especially with automated content generation and a structured publishing pipeline.

## Decision
Implement JSON Schema validation for chapter frontmatter, integrated into the Docusaurus build pipeline, complemented by TypeScript interfaces for development-time type checking. Schema changes will prioritize backward compatibility.
*   Validation Mechanism: JSON Schema.
*   Development-time Support: TypeScript interfaces.
*   Integration: Docusaurus build pipeline.
*   Schema Evolution Strategy: Emphasize backward compatibility; major shifts may use schema versioning.

## Consequences
*   **Pros**: Ensures strict data consistency, prevents malformed content from being published, provides immediate feedback to authors during local development and CI/CD, forms a clear contract for all chapter metadata.
*   **Cons**: Requires initial setup and maintenance of the schema definition, potential for build failures if schema changes are not managed correctly across content and code, requires a migration plan for breaking changes.

## Alternatives
*   Manual content review (error-prone, slow).
*   Custom validation scripts (more complex to maintain than schema).
*   Less strict type checking (increases risk of inconsistent data).

## References
*   `specs/001-ai-robotics-textbook/plan.md`
