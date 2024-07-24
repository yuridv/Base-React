import { Images as img } from '../utils/imports'

// O CSS da pagina é importado automático
const Page = ({ style }) => {
  return (
    <div>
      {/* Exemplo de como utilizar uma imagem importada */}
      <img src={ img.logos.icons.github } />
      <h1>PAGINA TESTE</h1>
    </div>
  )
}

export default Page;