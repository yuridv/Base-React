import { useState, useEffect } from 'react'

// import test from '../../assets/css/components/bar/sidebar.module.css'

import { Images as img } from '../../utils/imports'

// O CSS do componente é importado automático
const Page = ({ style }) => {
  return (
    <div className={ style.container }>
      <p>Sidebar</p>
    </div>
  )
}

export default Page;