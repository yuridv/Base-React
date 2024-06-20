import { Suspense } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

import { Routes as routes } from './utils/imports'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={ <h1>Loading SUSPENSE...</h1> }>
        <Routes>
          { routes }
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};

export default App;