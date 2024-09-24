import { createContext, useContext, useState, useEffect } from 'react'

import Request from '../Utils/Functions/Request'

const Context = createContext();

const AuthProvider = ({ children }) => {
  let [ login, setLogin ] = useState();

  const isAuthenticated = () => Request(process.env.API_URL + '/auth/verify', { method: 'GET' })
    .then((r) => { setLogin(r); return true })
    .catch((e) => { setLogin(); return false })

  useEffect(() => { isAuthenticated() }, []);

  return (
    <Context.Provider value={{ login, isAuthenticated }}>
      { children }
    </Context.Provider>
  )
}

const AuthContext = () => useContext(Context);

export {
  AuthProvider,
  AuthContext
};