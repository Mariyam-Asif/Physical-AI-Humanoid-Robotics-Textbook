import React from 'react';
import clsx from 'clsx';

interface KeyTakeawaysProps {
  children: React.ReactNode;
}

const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({ children }) => {
  return (
    <div
      className={clsx(
        'card',
        'padding--md',
        'margin-bottom--md',
        'key-takeaways-block',
      )}
    >
      <div className="card__header">
        <h3>Key Takeaways</h3>
      </div>
      <div className="card__body">
        {children}
      </div>
    </div>
  );
};

export default KeyTakeaways;
