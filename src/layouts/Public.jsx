import { Suspense } from 'react'

// Importação dos CSS que serão utilizados
import style from '../assets/css/layout/public.module.css'

const Layout = ({ element }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={ style.container }>
          <h2>Public Layout</h2>
        </div>
        { element }
      </Suspense>
    </>
  )
}

export default Layout;