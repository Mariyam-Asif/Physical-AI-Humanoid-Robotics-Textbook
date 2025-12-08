import React from 'react';
import clsx from 'clsx';
import Details from '@theme/Details';

interface ExerciseProps {
  id: string;
  title: string;
  solution: string;
  initialCode?: string;
  hints?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  children: React.ReactNode;
}

const Exercise: React.FC<ExerciseProps> = ({ id, title, solution, initialCode, hints, difficulty, children }) => {
  const [showSolution, setShowSolution] = React.useState(false);

  return (
    <div
      className={clsx(
        'card',
        'padding--md',
        'margin-bottom--md',
        'exercise-block',
      )}
    >
      <div className="card__header">
        <h3>{title}</h3>
        {difficulty && <span className={clsx('badge', {'badge--info': difficulty === 'easy', 'badge--warning': difficulty === 'medium', 'badge--danger': difficulty === 'hard'})}>{difficulty}</span>}
      </div>
      <div className="card__body">
        {children}
        {initialCode && (
          <Details summary={<summary>Starter Code</summary>}>
            <pre><code>{initialCode}</code></pre>
          </Details>
        )}
        {hints && hints.length > 0 && (
          <Details summary={<summary>Hints</summary>}>
            <ul>
              {hints.map((hint, index) => <li key={index}>{hint}</li>)}
            </ul>
          </Details>
        )}
        <Details summary={<summary>Show Solution</summary>}>
          <pre><code>{solution}</code></pre>
        </Details>
      </div>
    </div>
  );
};

export default Exercise;
