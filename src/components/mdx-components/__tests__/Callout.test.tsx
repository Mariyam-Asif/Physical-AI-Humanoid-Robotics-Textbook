import React from 'react';
import { render } from '@testing-library/react';
import Callout from '../Callout'; // We expect this component to exist soon

describe('Callout', () => {
  it('should render without crashing', () => {
    // This test will fail until the Callout component is created and properly renders
    const { getByText } = render(<Callout type="info" title="Test Callout">Hello World</Callout>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('should display the correct title', () => {
    const { getByText } = render(<Callout type="tip" title="Pro Tip">This is a tip</Callout>);
    expect(getByText('Pro Tip')).toBeInTheDocument();
  });

  it('should render different callout types', () => {
    const { getByText } = render(<Callout type="warning">Warning message</Callout>);
    expect(getByText('Warning message')).toBeInTheDocument();
  });
});