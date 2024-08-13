import { Images } from '../Utils/Imports'

import style from '../Assets/CSS/Components/Loading.module.css'

const Page = () => {
  return (
    <div className={ style.container }>
      <img src={ Images.loading } className={ style.loading }/>
    </div>
  )
}

export default Page;