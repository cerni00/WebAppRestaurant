import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

test('renders the app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome back/i); // Replace with actual text in your app
  expect(linkElement).toBeTruthy();
});

