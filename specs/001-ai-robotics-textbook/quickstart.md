# Quickstart Guide: Physical AI & Humanoid Robotics Course

This guide provides a quick and comprehensive overview to get you started with contributing to the Physical AI & Humanoid Robotics Course textbook. It covers installation, project setup, content creation, validation, and deployment processes.

## 1. Project Setup and Installation

To begin working on the textbook, follow these steps to set up your local development environment.

### Prerequisites

Ensure you have the following installed:

*   **Node.js** (LTS version recommended)
*   **npm** (Node Package Manager) or **Yarn**
*   **Git**

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd [YOUR_REPOSITORY_NAME]
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    # OR
    yarn install
    ```

## 2. Running the Development Server

Start the Docusaurus development server to preview your changes in real-time.

```bash
npm start
# OR
yarn start
```

This command opens a browser window to `http://localhost:3000`. Any changes you make to the Markdown/MDX files will automatically reload the page.

## 3. Project Structure

The project follows a structured layout designed for clear organization and easy navigation.

```
.
├── docs/                        # All chapter MDX files (Module/Chapter hierarchy)
│   ├── module-1-the-robotic-nervous-system-ros-2-weeks-3-5/
│   │   ├── chapter-1.mdx
│   │   └── _category_.json # Docusaurus sidebar configuration
│   ├── module-2-the-digital-twin-gazebo-unity-weeks-6-7/
│   │   └── chapter-N.mdx
|   |── module-3-the-ai-robot-brain-nvidia-isaac-weeks-8-10/
│   │   └── chapter-N.mdx
|   |── module-4-vision-language-action-weeks-11-13/
│   │   └── chapter-N.mdx
│   └── _category_.json          # Docusaurus sidebar configuration
├── templates/                   # Chapter template with frontmatter, exercises, callouts
│   └── chapter-template.md
├── contracts/                   # JSON Schema and TypeScript interfaces for metadata validation
│   └── chapter-metadata-schema.json
├── src/                         # Custom Docusaurus components, styles, etc.
├── static/                      # Static assets (images, files)
├── docusaurus.config.js         # Docusaurus configuration
├── package.json                 # Project dependencies and scripts
└── README.md
```

**Key Directories**:

*   **`docs/`**: This is the primary location for all textbook content. Chapters are organized into a `module-X-Module-Title-Weeks-X-Y/chapter-Z.mdx` hierarchy. Each directory (module) contains a `_category_.json` file for sidebar configuration.
*   **`templates/chapter-template.md`**: Use this template as the starting point for all new chapters to ensure consistent structure and metadata.
*   **`contracts/chapter-metadata-schema.json`**: This JSON Schema defines the required and optional frontmatter fields for each chapter. It is critical for metadata validation.

## 4. Creating New Chapters/Modules

Follow these guidelines when creating new content to maintain consistency and quality.

### Chapter File Naming and Location

*   **Path**: `docs/module-<number>-<slugified-module-title>-weeks-X-Y/chapter-<number>-<slug>.mdx`
    *   Example: `docs/module-1-the-robotic-nervous-system-ros-2-weeks-3-5/chapter-1-introduction-to-robotics.mdx`
*   **Content Type**: Use `.mdx` for chapters to enable rich content with custom React components.

### Chapter Template Usage

Always start a new chapter by copying and filling out `templates/chapter-template.md`.

**`templates/chapter-template.md` Structure**:

```markdown
---
id:                  # Unique ID for the chapter (e.g., 'm1w1c1')
title:               # Main chapter title
description:         # Short description for SEO and summaries
tags:                # Keywords for search and categorization (e.g., ['robotics', 'ai', 'overview'])
sidebar_label:       # Text displayed in the Docusaurus sidebar
estimated_time:      # Estimated reading/completion time (e.g., '30 min', '1 hr 15 min')
week:                # Week number (e.g., 1, 2, ..., 13)
module:              # Module number (e.g., 1, 2, 3, 4)
prerequisites:       # Array of chapter IDs that are prerequisites (e.g., ['m1w1c0', 'm1w1c1'])
learning_objectives: # Array of learning objectives (Bloom's Taxonomy verbs recommended)
assessment_type:     # Type of assessment (e.g., 'quiz', 'lab', 'project')
difficulty_level:    # Difficulty (e.g., 'beginner', 'intermediate', 'advanced')
capstone_component:  # Boolean, true if this chapter contributes to a capstone project
slug:                # Unique URL slug for the chapter (e.g., '/m1-the-robotic-nervous-system-ros-2-weeks-3-5/intro-robotics')
---

import { Tabs, TabItem } from '@docusaurus/theme-common';
import { Callout, Exercise, KeyTakeaways } from '@site/src/components/mdx-components'; // Example custom components

# Chapter Title (H1)

<Callout type="learning-objectives">
**Learning Objectives:**
*   [Objective 1: Use Bloom's Taxonomy verbs]
*   [Objective 2: Describe outcomes]
</Callout>

**Prerequisites:** [Link to Module X, Chapter Z](/docs/module-X-Module-Title-Weeks-X-Y/chapter-Z-title)

## Introduction

[Provide a concise introduction to the chapter's topic.]

## Core Content: [Tutorial / Concept / Hands-on Lab / Reference]

[Detailed content goes here. Follow APA-style clarity and professional formatting. Ensure technical accuracy and refer to sources using APA citations.]

### Code Block Standards

Use fenced code blocks with language identifiers, line numbers, copy buttons, and optional highlighting.

<Tabs groupId="code-examples">
  <TabItem value="python" label="Python" default>
```python {1-3} showLineNumbers title="hello_robot.py"
def greet_robot(name): # highlight-next-line
    print(f"Hello, {name}!")
    return True

greet_robot("Robbie")
```
  </TabItem>
  <TabItem value="bash" label="Bash">
```bash showLineNumbers
npm install
docusaurus start
```
  </TabItem>
</Tabs>

### Callout Rules

Use custom callout components for special information (e.g., warnings, notes, tips).

<Callout type="tip" title="Pro Tip">
Always validate your chapter metadata before building the site.
</Callout>

### Image Inclusion

Place images in `static/img/` and reference them as:
`![Alt text](/img/your-image.png)`

## Hands-On Exercise (Optional)

<Exercise difficulty="beginner" estimated_time="15 min">
  <p>**Problem Statement:** [Describe the task or problem to solve]</p>
  <p>**Starter Code:**</p>
```python
# Initial code for the exercise
```
  <details>
    <summary>Hint 1</summary>
    <p>[First hint]</p>
  </details>
  <details>
    <summary>Solution</summary>
```python
# Complete solution code
```
  </details>
</Exercise>

<KeyTakeaways>
**Key Takeaways:**
*   [Summary point 1]
*   [Summary point 2]
</KeyTakeaways>

## Troubleshooting (Optional)

[Common issues and their solutions related to this chapter.]

## Summary

[A brief summary of the chapter's main points.]

## References

[List all sources using APA-style citations.]

---
<!-- Automatic Prev/Next Navigation -->
```

## 5. Metadata Validation and Quality Checks

Maintaining high content quality and structural integrity is crucial.

### Metadata Validation

All chapter frontmatter is validated against `contracts/chapter-metadata-schema.json`.

**To validate your chapter metadata**:

The build process (`npm run build`) automatically performs this validation. If any metadata is invalid, the build will fail with specific error messages. Ensure all required fields (`title`, `sidebar_label`, `tags`, `learning_objectives`) are present and correctly formatted.

### Quality Checks

Before submitting content, verify the following:

*   **APA Style and Clarity**: Ensure content follows APA-style clarity and professional formatting as per `constitution.md`.
*   **Technical Accuracy**: All technical explanations must be correct and verifiable.
*   **Consistency**: Adhere to the unified structure, tone, and development workflow defined in `constitution.md` and `plan.md`..
*   **Chapter Layout**: Confirm the chapter follows the mandatory layout: Frontmatter → MDX Imports → Title → Learning Objectives → Prerequisites → Introduction → Core Content → Hands-On Exercise → Key Takeaways → Troubleshooting → Summary → References → Navigation.
*   **Component Rendering**: Verify that custom MDX components (Callouts, Exercises, Key Takeaways) and code blocks render correctly.
*   **Navigation**: Check `prev/next` navigation links display adjacent chapter titles correctly.
*   **Cross-Module Links**: Ensure prerequisite links and other cross-module references are functional.
*   **Performance**: Aim for page load times under 800ms on 4G mobile.

## 6. Glossary Updates

The textbook includes a comprehensive glossary.

*   **Location**: The glossary is typically maintained in `docs/glossary.mdx` or a similar dedicated file.
*   **Updating**: Add new terms and definitions as they appear in the course content, ensuring consistency with existing entries.

## 7. Search Configuration

Docusaurus includes a powerful search feature.

*   **Configuration**: Search is configured in `docusaurus.config.js`. The default setup indexes all Markdown/MDX content.
*   **Optimizing Search**: Ensure `tags` in chapter frontmatter are descriptive to improve search relevance.
    *   Example: `tags: ['physical ai', 'robotics basics', 'sensors', 'actuators']`

## 8. Build and Deployment

### Building the Site

To create a production-ready build of the Docusaurus site:

```bash
npm run build
# OR
yarn build
```

This command generates static HTML, CSS, and JavaScript files in the `build/` directory. The build process includes metadata validation; any errors will cause the build to fail.

### Deployment to GitHub Pages

The textbook is deployed to GitHub Pages.

1.  **Configure `docusaurus.config.js`**:
    Ensure the `baseUrl` and `projectName` fields are correctly configured for your GitHub repository.
    ```javascript
    module.exports = {
      // ...
      baseUrl: '/your-repository-name/', // e.g., '/physical-ai-robotics-textbook/'
      // ...
      organizationName: 'your-github-username-or-org',
      projectName: 'your-repository-name',
      deploymentBranch: 'gh-pages', // or 'master'/'main' if deploying from main branch
    };
    ```

2.  **Deploy**:
    ```bash
npm run deploy
# OR
yarn deploy
```

    This command builds the site and pushes the `build/` directory content to the `gh-pages` branch of your repository.
