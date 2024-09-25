import { createContext, useContext, useState, useEffect } from 'react'

import Request from '../Utils/Functions/Request'
import Loading from '../Components/Loading';

const Context = createContext();

const AuthProvider = ({ children }) => {
  let [ loaded, setLoaded ] = useState();
  let [ user, setUser ] = useState();

  const Login = () => window.location.href = process.env.API_URL + '/auth/discord';

  const Logout = () => Request(process.env.API_URL + '/auth/logout', { method: 'DELETE' })
    .then((r) => window.location.href = '/')
    .catch((e) => setUser());

  const isAuthenticated = () => Request(process.env.API_URL + '/auth/verify', { method: 'GET' })
    .then((r) => setUser(r))
    .catch((e) => setUser());

  useEffect(() => {
    (async () => {
      await isAuthenticated();
      setLoaded(true);
    })();
  }, []);

  return (
    <>
      {
        loaded ? (
          <Context.Provider value={{ user, Login, Logout, isAuthenticated }}>
            { children }
          </Context.Provider>
        ) : (
          <Loading />
        )
      }
    </>
  )
}

const AuthContext = () => useContext(Context);

export {
  AuthProvider,
  AuthContext
};