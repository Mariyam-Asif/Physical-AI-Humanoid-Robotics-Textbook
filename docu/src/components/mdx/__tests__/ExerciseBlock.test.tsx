import React from 'react';
import { render } from '@testing-library/react';
import ExerciseBlock from '../ExerciseBlock'; // We expect this component to exist soon

describe('ExerciseBlock', () => {
  it('should render without crashing and display title and children', () => {
    // This test will fail until the ExerciseBlock component is created and properly renders
    const { getByText } = render(
      <ExerciseBlock id="ex1" title="Sample Exercise" solution="Solution text">
        <p>Problem description</p>
      </ExerciseBlock>
    );
    expect(getByText('Sample Exercise')).toBeInTheDocument();
    expect(getByText('Problem description')).toBeInTheDocument();
  });
});