import React from 'react'
import { createRoot } from 'react-dom/client'

import { LoadingProvider } from './context/Loading.jsx'
import App from './app'

createRoot(document.querySelector('#root'))
  .render(
    <LoadingProvider>
      <App />
    </LoadingProvider>
  )