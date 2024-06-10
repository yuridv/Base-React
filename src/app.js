import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Importação das rotas/paginas automaticamente
import routes from './utils/imports/routes'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          { 
            routes.map((r, i) => {
              return <Route key={ i } path={ r.name } element={ <r.layout element={ <r.file /> } /> } />
            }) 
          }
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};

export default App;
