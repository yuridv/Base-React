import { useNavigate } from 'react-router-dom'

import { Images, Components } from '../Utils/Imports'
import { AuthContext } from '../Contexts/Authenticate'

const Page = ({ style }) => {
  const navigate = useNavigate();
  const { user, Login, Logout } = AuthContext();

  return (
    <>
      <div className={ style.header_container }>
        <div className={ style.header_text }>
          <a>Olá fofo(a), eu sou a</a>
          <div className={ style.header_title }>
            <a>STAR</a>
            <a>™</a>
          </div>
          <a>Proteja e automatize seu servidor</a>
          <div className={ style.buttons }>
            <Components.Buttons.Transparent text="Me Adicione" icon="fad fa-plus" />
            <Components.Buttons.Transparent onClick={ user ? Logout : Login } text={ user ? 'Sair' : 'Entrar' } icon={ 'fad ' + (user ? 'fa-sign-out' : 'fa-sign-in') } />
          </div>
          <Components.Buttons.Transparent onClick={ user ? () => navigate('/dashboard') : Login } text="Painel de Controle" icon="fad fa-cogs" />
        </div>
        <div className={ style.header_person }>
          <img src={ Images.person } />
        </div>
      </div>
    </>
  )
}

export default Page;