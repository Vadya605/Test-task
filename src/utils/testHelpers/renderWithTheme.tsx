import { ReactNode } from 'react';

import { getTheme } from '@/utils/getTheme';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';

const renderWithTheme = (component: ReactNode) => {
  const theme = getTheme('dark')
  return render(
    <ThemeProvider theme={theme}>
        {component}
    </ThemeProvider>
  );
};

export { renderWithTheme };