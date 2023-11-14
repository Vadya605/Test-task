import { ReactNode } from 'react';

import { Provider } from 'react-redux';

import {ThemeProvider} from '@mui/material'

import { store } from '@/store/store';
import { getTheme } from '@/utils/getTheme';
import { render } from '@testing-library/react';

const renderWithAllProviders = (component: ReactNode) => {
  const theme = getTheme('dark')
  return render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            { component }
        </Provider>
    </ThemeProvider>
  );
};

export { renderWithAllProviders };