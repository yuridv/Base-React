import Page from '../utils/imports/pages'

import style from '../assets/css/layout/public.module.css'
import Navbar from '../components/Navbar'

const Layout = () => {
  console.log('[Layout]=> Public')
  return (
    <>
      <Navbar />
      <div className={ style.container }>
        <h2>Public Layout</h2>
      </div>
      <Page />
    </>
  )
}

export default Layout;