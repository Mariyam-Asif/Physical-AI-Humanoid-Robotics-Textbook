import React, { useState } from 'react';
import OriginalCodeBlock from '@theme-original/CodeBlock';

export default function CodeBlock(props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <OriginalCodeBlock {...props} />
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: '#eee',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '2px 8px',
          cursor: 'pointer',
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
