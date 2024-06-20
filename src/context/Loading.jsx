import React, { createContext, useContext, useState, useEffect } from 'react'

import style from '../assets/css/context/loading.module.css'
import img from '../assets/img/loading.gif';

const Context = createContext();

const LoadingProvider = ({ children }) => {
  const [ load, setLoad ] = useState(false);

  return (
    <Context.Provider value={{ load, setLoad }}>
      { load && (
        <div className={ style.container }>
          <img src={ img } className={ style.loading }/>
        </div>
      ) }
      { children }
    </Context.Provider>
  )
}

const LoadingContext = () => useContext(Context);

export { LoadingContext, LoadingProvider };