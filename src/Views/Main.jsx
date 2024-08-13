import { Images, Components } from '../Utils/Imports'

// O CSS/style da pagina é importado automático
const Page = ({ style }) => {
  return (
    <div>
      {/* Exemplo de como importar um componente */}
      <Components.Navbars.Top />

      {/* Exemplo de como importar uma imagem */}
      <img src={ Images.logos.github } className={ style.image_logo } />

      <h1 className={ style.color_text }>PAGINA PUBLICA</h1>
    </div>
  )
}

export default Page;