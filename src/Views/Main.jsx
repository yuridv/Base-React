import { Images, Components } from '../Utils/Imports'

// O CSS/style da pagina é importado automático
const Page = ({ style }) => {
  return (
    <div className={ style.header_container }>
      <img src={ Images.person } />
    </div>
  )
}

export default Page;