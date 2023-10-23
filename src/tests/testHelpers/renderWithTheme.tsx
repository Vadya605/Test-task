import { theme } from '@/theme';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';

const renderWithTheme = (component: ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
        {component}
    </ThemeProvider>
  );
};

export { renderWithTheme };