import { Images, Components } from '../Utils/Imports'

const Page = ({ style }) => {
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
            <Components.Buttons.Transparent text="Entrar" icon="fad fa-sign-in" />
          </div>
          <Components.Buttons.Transparent text="Dashboard" icon="fad fa-cogs" />
        </div>
        <div className={ style.header_person }>
          <img src={ Images.person } />
        </div>
      </div>
    </>
  )
}

export default Page;