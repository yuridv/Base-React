import { Images as img, Components } from '../utils/imports'

import style from '../assets/css/components/loading.module.css'

const Page = () => {
  return (
    <div className={ style.container }>
      <img src={ img.loading } className={ style.loading }/>
    </div>
  )
}

export default Page;