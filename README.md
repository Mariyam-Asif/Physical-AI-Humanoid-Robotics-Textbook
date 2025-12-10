## Physical AI & Humanoid Robotics Textbook 

*A Specification-Driven Development (SDD) Project*

This repository contains the full source code and documentation for an open-source textbook on Physical AI, embodied intelligence, and humanoid robotics.
Built using Docusaurus 3, TypeScript, React, and Spec-Kit Plus.

---

## Specification-Driven Development 

This project is built using **Spec-Driven Development (SDD)** powered by **Spec-Kit Plus**.

### Core Structure

| Component      | Description                                     | Path                                  |
| -------------- | ----------------------------------------------- | ------------------------------------- |
| Constitution   | Global rules & principles for the project       | `.specify/memory/constitution.md`     |
| Specifications | High-level feature and textbook structure specs | `specs/001-ai-robotics-textbook/spec.md`  |
| Planning       | Implementation plan and strategy                | `specs/001-ai-robotics-textbook/plan.md`  |
| Tasks          | Atomic actionable tasks                         | `specs/001-ai-robotics-textbook/tasks.md` |
| History        | AI prompt history and project logs              | `history/prompts/`                    |

SDD ensures every chapter, UI component, and feature maps cleanly back to written specifications.

---

## Technology Stack 

### Core
* Docusaurus 3.x
* React 18.x
* TypeScript 5.x
* Node.js 18+
* Spec-Kit Plus (Specification-Driven Development workflow)

### Deployment
* GitHub Pages
* GitHub Actions (CI/CD)

### AI Assistant
* Claude Code

---

## Overview 

This textbook provides hands-on, industry-grade training for building intelligent autonomous humanoid robots.

### Curriculum Structure

#### Weeks 3–5 — Module 1: ROS 2 (The Robotic Nervous System)

Learn ROS 2 architecture, nodes, topics, services, actions, URDF, and visualization in RViz2.

#### Weeks 6–7 — Module 2: Digital Twin (Simulation & Sensors)

Develop digital twins using Gazebo and Unity with physics, sensors, and perception.

#### Weeks 8–10 — Module 3: NVIDIA Isaac (Perception & Navigation)

GPU-accelerated robotics, VSLAM, Nav2 navigation, reinforcement learning, and synthetic data.

#### Weeks 11–13 — Module 4: VLA (Vision-Language-Action Models)

Multimodal AI, humanoid manipulation, kinematics, and human-robot interaction.

---

## Target Audience 

Ideal for:

* Industry professionals transitioning to robotics
* AI engineers moving into embodied intelligence
* Students with basic Python knowledge
* Developers interested in humanoid robotics and Physical AI

---

## Quick Start 

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run start
```

Local: [http://localhost:3000](http://localhost:3000)

### 3. Build Production Bundle

```bash
npm run build
```

### 4. Deploy (GitHub Pages)

```bash
npm run deploy
```

---

## Project Structure 

```
root/
│
├── docs/
│   ├── introduction.mdx
│   ├── module-1/
│   ├── module-2/
│   ├── module-3/
│   └── module-4/
│
├── src/
│   ├── components/
│   ├── pages/
│   └── css/
│
├── specs/
│   └── 001-ai-robotics-textbook/ 
│
├── .specify/
│   └── memory/
│
├── history/prompts/
│
└── docusaurus.config.ts
```
