import React from 'react';
import { render } from '@testing-library/react';
import Add from '../Add'; // Adjust the path based on your folder

test('Add component loads successfully', () => {
  const screenRender = render(<Add employees={[]} setEmployees={() => {}} setIsAdding={() => {}} />);
  screenRender.unmount(); // Clean up after test
});