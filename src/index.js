import React from 'react'
import { createRoot } from 'react-dom/client'

import { AuthProvider } from './Contexts/Authenticate';
import App from './app';

createRoot(document.querySelector('#root'))
  .render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );