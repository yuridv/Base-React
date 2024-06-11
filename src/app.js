import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Loading = lazy(()=> import('./components/Loading'));
import routes from './utils/imports/routes'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={ <Loading /> }>
        <Routes>
          { routes }
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};

export default App;