import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'introduction', // Link to introduction.mdx
    'glossary', // Link to glossary.mdx
    'references', // Link to references.mdx
    {
      type: 'category',
      label: 'Module 1 (ROS 2) (Weeks 3–5)',
      collapsible: true,
      items: [
        'module-1/m1c1',
      ],
    },
    {
      type: 'category',
      label: 'Module 2 (Gazebo & Unity) (Weeks 6–7)',
      items: [
        'module-2/m2c1',
      ],
    },
{
      type: 'category',
      label: 'Module 3 (NVIDIA Isaac™) (Weeks 8–10)',
      collapsible: true,
      items: [
        'module-3/m3c1',
      ],
    },
    {
      type: 'category',
      label: 'Module 4 (VLA) (Weeks 11–13)',
      items: [
        'module-4/m4c1',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
