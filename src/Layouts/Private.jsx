import { Images, Components } from '../Utils/Imports'

import style from '../Assets/CSS/Layouts/Private.module.css'

const Layout = ({ element }) => {
  return (
    <div className={ style.container }>
      <h1>PRIVATE LAYOUT</h1>
      { element }
    </div>
  )
}

export default Layout;