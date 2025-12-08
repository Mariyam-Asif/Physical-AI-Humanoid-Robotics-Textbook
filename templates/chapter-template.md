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