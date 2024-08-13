import { Suspense } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom';

import { Routes as Route, Components } from './Utils/Imports'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={ <Components.Loading /> }>
        <Routes>
          { Route }
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};

export default App;