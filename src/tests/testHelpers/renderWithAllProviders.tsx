import { ReactNode } from 'react';

import { Provider } from 'react-redux';

import {ThemeProvider} from '@mui/material'

import { store } from '@/store/store';
import { theme } from '@/theme';
import { render } from '@testing-library/react';

const renderWithAllProviders = (component: ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            { component }
        </Provider>
    </ThemeProvider>
  );
};

export { renderWithAllProviders };