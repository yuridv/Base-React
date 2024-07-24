import { Images as img } from '../../utils/imports'

// O CSS da pagina é importado automático
const Page = ({ style }) => {
  return (
    <div className={ style.container }>

      {/* Exemplo de como utilizar uma imagem importada */}
      <img src={ img.logos.github } />

      <h1>PAGINA TESTE</h1>
    </div>
  )
}


export default Page;