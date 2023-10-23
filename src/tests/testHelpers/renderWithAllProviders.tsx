import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ReactNode } from 'react';
import { theme } from '@/theme';
import {ThemeProvider} from '@mui/material'

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