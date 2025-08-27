import './index.css'

import { configureStore } from '@app/store.ts'
import React from 'react'
import ReactDOM from 'react-dom' // Используем старый API
import { Provider } from 'react-redux'

import { App } from './app/App'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
    document.getElementById('root')!,
)
