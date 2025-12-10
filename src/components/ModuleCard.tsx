import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

interface ModuleCardProps {
  week: string;
  title: string;
  description: string;
  learningOutcomes: string[];
  link: string;
}

function ModuleCard({ week, title, description, learningOutcomes, link }: ModuleCardProps) {
  return (
    <Link to={link} className={clsx(styles.moduleCard)}>
      <div className={styles.week}>{week}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.learningOutcomes}>
        {learningOutcomes.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </Link>
  );
}

export default ModuleCard;
