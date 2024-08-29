import { createContext, useContext, useState, useEffect } from 'react'
import Request from '../Utils/Functions/Request'

const Context = createContext();

const AuthProvider = ({ children }) => {
  console.log(process.env.API_URL + '/auth/discord')
  let [ login, setLogin ] = useState();

  useEffect(() => isAuthenticate, []);

  const isAuthenticate = async () => {
    console.log('isAuthenticate')
    return Request(process.env.API_URL + '/auth/discord', { method: 'GET' })
      .then((r) => console.log(r))
      .catch((e) => e)
  }

  return (
    <Context.Provider value={{ login, isAuthenticate }}>
      { children }
    </Context.Provider>
  )
}

const AuthContext = () => useContext(Context);

export {
  AuthProvider,
  AuthContext
};