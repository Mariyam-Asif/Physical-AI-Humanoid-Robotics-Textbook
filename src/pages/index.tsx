import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ModuleCard from '@site/src/components/ModuleCard';
import QuickLinksSidebar from '@site/src/components/QuickLinksSidebar'; // Import the new component
import styles from './index.module.css';

const modules = [
  {
    week: 'Weeks 3-5',
    title: 'Module 1: The Robotic Nervous System (ROS 2)',
    description: 'Master ROS 2 architecture, communication patterns, and robot modeling. Learn to build distributed robotic systems using nodes, topics, services, and actions.',
    learningOutcomes: [
      'Explain the ROS 2 computation graph and its components',
      'Create publishers, subscribers, and service clients using rclpy',
      'Define robot structure using URDF and visualize in RViz2',
    ],
    link: '/docs/module-1/introduction-to-ros2',
  },
  {
    week: 'Weeks 6-7',
    title: 'Module 2: Digital Twins - Simulation & Sensors',
    description: 'Build digital twins for robotic systems using Gazebo and Unity. Simulate sensors, physics, and environments for testing before deploying to physical hardware.',
    learningOutcomes: [
      'Create Gazebo simulation environments with physics and sensors',
      'Integrate Unity for photorealistic sensor simulation',
      'Test navigation and perception algorithms in simulation',
    ],
    link: '/docs/module-2/introduction-to-digital-twins',
  },
  {
    week: 'Weeks 8-10',
    title: 'Module 3: NVIDIA Isaac - Perception & Navigation',
    description: 'Leverage NVIDIA Isaac Sim for GPU-accelerated robotics. Implement VSLAM, Nav2 navigation stacks, and reinforcement learning for autonomous behaviors.',
    learningOutcomes: [
      'Set up and configure NVIDIA Isaac Sim environments',
      'Implement Visual SLAM for robot localization',
      'Deploy Nav2 navigation stack for autonomous navigation',
    ],
    link: '/docs/module-3/introduction-to-nvidia-isaac',
  },
  {
    week: 'Weeks 11-13',
    title: 'Module 4: VLA & Humanoid Robotics',
    description: 'Integrate Vision-Language-Action models with humanoid robots. Master humanoid kinematics, manipulation, and conversational AI for natural human-robot interaction.',
    learningOutcomes: [
      'Calculate forward and inverse kinematics for humanoid robots',
      'Implement manipulation primitives for pick-and-place tasks',
      'Integrate conversational AI with robot action planning',
    ],
    link: '/docs/module-4/introduction-to-vla',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>

      <div className={clsx('container', styles.contentWrapper)}> {/* Add contentWrapper */}
        <QuickLinksSidebar /> {/* Add the sidebar component */}
        <main className={styles.main}>
          <h2 style={{ textAlign: 'center', margin: '2rem 0', color: 'white' }}>Course Modules</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {modules.map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
