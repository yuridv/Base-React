// Importação dos CSS que serão utilizados
import style from '../../assets/css/views/Example/page.module.css'

// Importação dos Componentes que serão utilizados
import Navbar from '../../components/Navbar'

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className={ style.container }>
        <h1 className={ style.center }>Hello World /test</h1>
      </div>
    </div>
  )
}

export default Page
