import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/App'
import { persistor, store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <PersistGate persistor={persistor} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
)
