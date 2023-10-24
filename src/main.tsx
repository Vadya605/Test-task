import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import {ThemeProvider} from '@mui/material'

import App from '@/components/App'
import { persistor, store } from '@/store/store.ts'

import './index.css'
import './firebase.ts'
import { theme } from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <PersistGate persistor={persistor} >
      {/* <React.StrictMode> */}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>
)
