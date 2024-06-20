import { Images } from '../utils/imports'

// Exemplo de como importar imagens
const img = Images([
  "imagem.png", // Exemplo de como importar uma imagem (Diretório: /src/assets/img/imagem.png)
  "pasta/image.png", // Exemplo de como importar uma imagem dentro de outra pasta (Diretório: /src/assets/img/pasta)
  "pasta/image", // Pode passar uma imagem sem passar a extensão (EX: .png, .jpg, .gif)

  "logos/icons/github", // Exemplo de uma imagem REAL (Diretório: /src/assets/img/logos/icons/github.png)
]);

const Page = () => {
  return (
    <div>
      {/* Exemplo de como utilizar uma imagem importada */}
      <img src={ img.logos.icons.github } />
      <h1>PAGINA TESTE</h1>
    </div>
  )
}


export default Page;