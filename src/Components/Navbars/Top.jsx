import { Images, Components } from '../../Utils/Imports'

// O CSS do componente é importado automático
const Page = ({ style }) => {
  return (
    <div className={ style.container }>
      <p className={ style.title }>STAR</p>
    </div>
  )
}

export default Page;