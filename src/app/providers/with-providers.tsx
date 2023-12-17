import React from 'react';
import { ThemeProvider } from './theme-provider';

export const withProviders = (Component: React.ComponentType) => () => (
  <ThemeProvider>
    <Component />
  </ThemeProvider>
);
