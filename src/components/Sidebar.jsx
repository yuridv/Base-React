import { Images as img } from '../utils/imports'

// O CSS da pagina é importado automático
const Page = ({ style }) => {
  if (!style) style = {};
  return (
    <div className={ style.container }>
      <p>Sidebar</p>
    </div>
  )
}

export default Page;