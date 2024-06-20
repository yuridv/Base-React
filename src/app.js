import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Page from './views/Page.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={ <h1>Loading SUSPENSE...</h1> }>
        <Routes>
          <Route path="*" element={ <Page /> } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};

export default App;