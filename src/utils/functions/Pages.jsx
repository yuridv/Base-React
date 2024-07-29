import { useState, useEffect } from 'react';

import Loading from '../../components/Loading'

const Pages = ({ Component, CSS }) => {
  const [ Load, setLoad ] = useState(true);
  const [ style, setStyle ] = useState({ error: true });

  useEffect(() => { 
    (async () => { 
      setStyle((await CSS()).default); 
      setLoad(false);
    })() 
  }, [ CSS ]);

  return (
    <>
      { Load && <Loading /> }
      <Component style={ style } />
    </>
  )
}

export default Pages