// ESSA IMPORTAÇÃO NÃO ESTÁ FUNCIONANDO AINDA!!!

import { useEffect, useState } from 'react'
let Component = {};

const Load = ({ element }) => {
  let [load, setLoad] = useState(true);

  useEffect(()=> {
    (async ()=> {
      let find = await Components(element);
      if (find.error) {
        Component = <h1>{ find.error }</h1>;
      } else {
        Component = <find />;
      }
      setLoad(false);
    })();
  })

  return (
    <>
      { load ? <h2>Loading Component...</h2> : Component }
    </>
  )
}

export default Load;

const files = import.meta.glob('../../components/**/**/**/**/**/**/**/*');
const Components = async (component) => {
  let f = Object.keys(files).find((r) => r.toLocaleLowerCase().replace('../../components/','').split('.')[0] == component.toLocaleLowerCase());
  if (f) return (await files[f]()).default;

  return { error: 'COMPONENT_NOT_FOUND' }
}