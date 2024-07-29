import { useState, useEffect } from 'react'

// import test from '../../assets/css/components/bar/navbar.module.css'

import { Images as img, Components } from '../../utils/imports'

// O CSS do componente é importado automático
const Page = ({ style }) => {
  return (
    <div className={ style.container }>
      <p className={ style.text }>Navbar</p>
    </div> 
  )
}

export default Page;