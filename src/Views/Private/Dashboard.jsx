import { Images, Components } from '../../Utils/Imports'

import Request from '../../Utils/Functions/Request'
import { AuthContext } from '../../Contexts/Authenticate'

const Page = ({ style }) => {
  const { user, Login, Logout, isAuthenticated } = AuthContext();

  const Private = () => {
    return Request(process.env.API_URL + '/privado', { method: 'POST' })
      .then((r) => {
        console.log('[Private SUCCESS]=> ', r)
      })
      .catch((e) => {
        console.log('[Private ERROR]=> ', e)
      })
  }

  return (
    <>
      <div style={{ marginTop: '20vh', marginLeft: '10vw' }}>
        <a onClick={ Login } style={{ cursor: 'pointer' }}>LOGAR</a>
        <a> - </a>
        <a onClick={ Logout } style={{ cursor: 'pointer' }}>DESLOGAR</a>
        <a> - </a>
        <a onClick={ isAuthenticated } style={{ cursor: 'pointer' }}>VERIFICAR</a>
        <a> - </a>
        <a onClick={ Private } style={{ cursor: 'pointer' }}>PRIVADO</a>
      </div>
    </>
  )
}

export default Page;