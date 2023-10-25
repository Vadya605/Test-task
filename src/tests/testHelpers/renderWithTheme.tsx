import { ReactNode } from 'react';

import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { getTheme } from '@/utils/getTheme';

const renderWithTheme = (component: ReactNode) => {
  const theme = getTheme('dark')
  return render(
    <ThemeProvider theme={theme}>
        {component}
    </ThemeProvider>
  );
};

export { renderWithTheme };