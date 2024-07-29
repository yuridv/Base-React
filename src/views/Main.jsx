import { Images as img, Components } from '../utils/imports'

// O CSS da pagina é importado automático
const Page = ({ style }) => {
  return (
    <div>
      {/* Exemplo de como importar um componente */}
      {/* < Components.Navbar /> */}
      { Components.Bar.Navbar }

      {/* Exemplo de como importar uma imagem */}
      <img src={ img.logos.icons.github } />

      <h1>PAGINA TESTE</h1>
    </div>
  )
}

export default Page;