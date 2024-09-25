import { Components } from '../Utils/Imports'

import style from '../Assets/CSS/Layouts/Public.module.css'

const Layout = ({ element }) => {
  return (
    <div className={ style.container }>
      <Components.Navbars.Top />
      { element }
    </div>
  )
}

export default Layout;