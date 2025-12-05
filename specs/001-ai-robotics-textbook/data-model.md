# Data Model & Contracts: AI Robotics Textbook System

## Overview
This document defines the core data entities, their attributes, and the contracts (JSON Schemas, TypeScript interfaces) used within the Docusaurus-based textbook system. This ensures data consistency, type safety, and facilitates automated validation during the build process.

## Key Entities

### 1. Book
- **Description**: The complete collection of content for the Physical AI and Robotics curriculum.
- **Attributes**:
  - `title` (string): Overall title of the textbook.
  - `description` (string): A brief summary of the textbook's content.
  - `modules` (array of Module): A list of modules comprising the textbook.

### 2. Module
- **Description**: A top-level organizational unit within the textbook, containing multiple weeks/chapters.
- **Attributes**:
  - `title` (string): The title of the module.
  - `week_range` (string): The range of weeks covered by this module (e.g., "Weeks 3–5").
  - `learning_outcomes` (array of string): Key learning objectives for the entire module.
  - `chapters` (array of Chapter): A list of chapters within this module.

### 3. Week
- **Description**: A sub-unit within a module, often corresponding to a specific week in the curriculum.
- **Attributes**:
  - `number` (integer): The week number.
  - `chapters` (array of Chapter): Chapters covered in this week.

### 4. Chapter (MDX File with Frontmatter)
- **Description**: A single Markdown/MDX page representing a lesson or topic, with structured metadata.
- **Attributes** (Frontmatter):
  - `title` (string, **required**): The main title of the chapter.
  - `sidebar_label` (string, **required**): The label displayed in the Docusaurus sidebar.
  - `tags` (array of string, **required**): Keywords for categorization and search.
  - `estimated_time` (string, optional): Estimated time to complete the chapter (e.g., "2 hours").
  - `week` (integer, optional): The week number this chapter belongs to.
  - `module` (string, optional): The module title this chapter belongs to.
  - `prerequisites` (array of string, optional): List of slugs/titles of prerequisite chapters.
  - `learning_objectives` (array of string, **required**): Specific learning goals for the chapter (Bloom's taxonomy verbs recommended).
  - `assessment_type` (string, optional): Type of assessment for the chapter (e.g., "Quiz", "Lab").
  - `difficulty_level` (string, optional): Difficulty (e.g., "Beginner", "Intermediate", "Advanced").
  - `capstone_component` (boolean, optional): Indicates if the chapter includes a capstone project component.
  - `slug` (string, **inferred/generated**): Unique identifier for the chapter URL.

### 5. Navigation Structure
- **Description**: Defines how users navigate through the textbook (sidebar, cross-references, prev/next links).
- **Contracts**:
  - **Docusaurus Sidebar Configuration**: YAML structure defining `docs` array with `id`, `label`, `type` (`category`, `doc`), `items` for nesting.
  - **Cross-references**: Markdown links `[link text](/docs/module-slug/chapter-slug)`.

## JSON Schema for Chapter Frontmatter

This section will contain the JSON Schema (`contracts/chapter-metadata-schema.json`) for validating chapter frontmatter. This schema will enforce required fields, data types, and any specific patterns for attributes.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Chapter Frontmatter Schema",
  "description": "Schema for validating Docusaurus chapter frontmatter.",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "The main title of the chapter."
    },
    "sidebar_label": {
      "type": "string",
      "description": "The label displayed in the Docusaurus sidebar."
    },
    "tags": {
      "type": "array",
      "description": "Keywords for categorization and search.",
      "items": {
        "type": "string"
      }
    },
    "estimated_time": {
      "type": "string",
      "description": "Estimated time to complete the chapter (e.g., '2 hours')."
    },
    "week": {
      "type": "integer",
      "description": "The week number this chapter belongs to."
    },
    "module": {
      "type": "string",
      "description": "The module title this chapter belongs to."
    },
    "prerequisites": {
      "type": "array",
      "description": "List of slugs/titles of prerequisite chapters.",
      "items": {
        "type": "string"
      }
    },
    "learning_objectives": {
      "type": "array",
      "description": "Specific learning goals for the chapter (Bloom's taxonomy verbs recommended).",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "assessment_type": {
      "type": "string",
      "description": "Type of assessment for the chapter (e.g., 'Quiz', 'Lab')."
    },
    "difficulty_level": {
      "type": "string",
      "description": "Difficulty (e.g., 'Beginner', 'Intermediate', 'Advanced')."
    },
    "capstone_component": {
      "type": "boolean",
      "description": "Indicates if the chapter includes a capstone project component."
    }
  },
  "required": [
    "title",
    "sidebar_label",
    "tags",
    "learning_objectives"
  ]
}
```

## TypeScript Interfaces

This section will contain corresponding TypeScript interfaces for type-safe development when working with frontmatter and other data structures in the Docusaurus application.

```typescript
// contracts/ChapterFrontmatter.ts
interface ChapterFrontmatter {
  title: string;
  sidebar_label: string;
  tags: string[];
  estimated_time?: string;
  week?: number;
  module?: string;
  prerequisites?: string[];
  learning_objectives: string[];
  assessment_type?: 'Quiz' | 'Lab' | 'Project'; // Example enum
  difficulty_level?: 'Beginner' | 'Intermediate' | 'Advanced'; // Example enum
  capstone_component?: boolean;
}

// Example: Module structure interface
interface Module {
  title: string;
  week_range: string;
  learning_outcomes: string[];
  chapters: ChapterFrontmatter[]; // Or a more complex Chapter interface if needed
}

// Example: Book structure interface
interface Book {
  title: string;
  description: string;
  modules: Module[];
}
```
