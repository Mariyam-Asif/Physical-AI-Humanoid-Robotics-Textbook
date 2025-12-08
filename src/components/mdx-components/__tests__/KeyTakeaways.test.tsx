import React from 'react';
import { render } from '@testing-library/react';
import KeyTakeaways from '../KeyTakeaways'; // We expect this component to exist soon

describe('KeyTakeaways', () => {
  it('should render without crashing and display children', () => {
    // This test will fail until the KeyTakeaways component is created and properly renders
    const { getByText } = render(<KeyTakeaways><ul><li>Takeaway 1</li><li>Takeaway 2</li></ul></KeyTakeaways>);
    expect(getByText('Takeaway 1')).toBeInTheDocument();
    expect(getByText('Takeaway 2')).toBeInTheDocument();
  });
});