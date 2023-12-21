import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles'; 
import { theme } from '../src/styles/theme';

/** @type { import('@storybook/react').Preview } */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'ligth',
    values: [
      {
        name: 'ligth',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.primaryColor,
      },
    ]
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
];
