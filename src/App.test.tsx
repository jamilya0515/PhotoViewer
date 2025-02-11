import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello world text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/React Photo Viewer/i);
    expect(textElement).toBeVisible();
  });

test('GetImage ', () => {
const { getByText } = render(<App />);
const Element = getByRole(/React Photo Viewer/i);
expect(getByRole('button')).not.toBeDisabled();
});


  

// A unit test to check our imageUrl generation code - for me, 
// this might check that the first link is what I expect and that it doesn’t include the ‘broken’ images.

// A ‘Regression / Snapshot' test to confirm that I the ‘ImageViewer' component doesn’t accidentally change in the future.

// A Component Test to confirm that when I click a thumbnail, then the
//  thumbnail becomes selected and the ImageViewer updates with the new image.