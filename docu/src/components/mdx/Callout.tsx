import React from 'react';
import clsx from 'clsx';
import { IconInfo, IconWarning, IconTip, IconDanger } from '@tabler/icons-react'; // Assuming @tabler/icons-react is installed

interface CalloutProps {
  type: 'info' | 'warning' | 'tip' | 'danger' | 'learning-objectives';
  title?: string;
  children: React.ReactNode;
}

const Callout: React.FC<CalloutProps> = ({ type, title, children }) => {
  const Icon = {
    info: IconInfo,
    warning: IconWarning,
    tip: IconTip,
    danger: IconDanger,
    'learning-objectives': IconInfo, // Default to info icon for learning objectives
  }[type];

  const calloutTitle = title || (type === 'learning-objectives' ? 'Learning Objectives' : type.charAt(0).toUpperCase() + type.slice(1));

  return (
    <div
      className={clsx(
        'padding--md',
        'margin-bottom--md',
        {
          'alert alert--info': type === 'info' || type === 'learning-objectives',
          'alert alert--warning': type === 'warning',
          'alert alert--danger': type === 'danger',
          'alert alert--success': type === 'tip', // Docusaurus uses success for tips
        },
      )}
      role="alert">
      {Icon && <Icon className="callout-icon" />}
      <div className="callout-content">
        {calloutTitle && <h3 className="callout-title">{calloutTitle}</h3>}
        {children}
      </div>
    </div>
  );
};

export default Callout;
