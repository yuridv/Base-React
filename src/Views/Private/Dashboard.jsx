import { Images, Components } from '../../Utils/Imports'

import Request from '../../Utils/Functions/Request'

const Page = ({ style }) => {
  const Logar = () => {
    window.location.href = process.env.API_URL + '/auth/discord'
  }

  const DesLogar = () => {
    return Request(process.env.API_URL + '/auth/logout', { method: 'GET' })
      .then((r) => {
        console.log('[DesLogar SUCCESS]=> ', r)
      })
      .catch((e) => {
        console.log('[DesLogar ERROR]=> ', e)
      })
  }

  const Verify = () => {
    return Request(process.env.API_URL + '/auth/verify', { method: 'GET' })
      .then((r) => {
        console.log('[Verify SUCCESS]=> ', r)
      })
      .catch((e) => {
        console.log('[Verify ERROR]=> ', e)
      })
  }

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
        <a onClick={ Logar } style={{ cursor: 'pointer' }}>LOGAR</a>
        <a> - </a>
        <a onClick={ DesLogar } style={{ cursor: 'pointer' }}>DESLOGAR</a>
        <a> - </a>
        <a onClick={ Verify } style={{ cursor: 'pointer' }}>VERIFICAR</a>
        <a> - </a>
        <a onClick={ Private } style={{ cursor: 'pointer' }}>PRIVADO</a>
      </div>
    </>
  )
}

export default Page;