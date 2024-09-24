import { Images, Components } from '../../Utils/Imports'

import { AuthContext } from '../../Contexts/Authenticate'

// O CSS do componente é importado automático
const Page = ({ style }) => {
  const { isAuthenticated } = AuthContext();

  return (
    <div className={ style.container }>
      <div className={ style.left }>
        <a className={ style.logo } href="/">
          <img className={ style.logo_person } src={ Images.person_head } />
          <p className={ style.title }>STAR</p>
          <p className={ style.title_tm }>™</p>
        </a>
        <div className={ style.items }>
          <a href="/support"><i className="fa-brands fa-discord" /> Suporte</a>
          <a href="/commands"><i className="fa-duotone fa-books" /> Comandos</a>
          <a href="/store"><i className="fa-duotone fa-store" /> Loja</a>
          <a href="/donate"><span>Premium<i className="fa-duotone fa-crown" /></span></a>
        </div>
      </div>
      <div className={ style.right }>
        <div className={ style.items + ' ' + style.icons }>
          <a><i className="fa-solid fa-moon" /></a>
          <div className={ style.separator } />
          <a><i className="fa-duotone fa-user-astronaut" /></a>
        </div>
      </div>
    </div>
  )
}

export default Page;