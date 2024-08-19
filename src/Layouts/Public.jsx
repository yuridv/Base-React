import { Images, Components } from '../Utils/Imports'

import style from '../Assets/CSS/Layouts/Public.module.css'

const Layout = ({ element }) => {
  return (
    <>
      <Components.Navbars.Top />
      { element }
    </>
  )
}

export default Layout;