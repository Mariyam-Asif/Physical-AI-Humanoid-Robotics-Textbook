import React from 'react';
import Link from '@docusaurus/Link';
import styles from './QuickLinksSidebar.module.css';

const QuickLinksSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h3>Quick Links</h3>
      <ul>
        <li>
          <Link to="/docs/introduction">Introduction</Link>
        </li>
         <li>
          <Link to="/docs/hardware-setup">Hardware Setup</Link>
        </li>
         <li>
          <Link to="/docs/environment-config">Environment Config</Link>
        </li>
        <li>
          <Link to="/docs/references">References</Link>
        </li>
        <li>
          <Link to="/docs/glossary">Glossary</Link>
        </li>
          <li>
          <Link to="/docs/module-1/introduction-to-ros2">Module 1: ROS 2</Link>
        </li>
          <li>
          <Link to="/docs/module-2/introduction-to-digital-twins">Module 2: Digital Twins</Link>
        </li>
        <li>
          <Link to="/docs/module-3/introduction-to-nvidia-isaac">Module 3: NVIDIA Isaac</Link>
        </li>
        <li>
          <Link to="/docs/module-4/introduction-to-vla">Module 4: VLA</Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinksSidebar;