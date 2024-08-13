import { useEffect, useState } from "react";

import Loading from '../../Components/Loading';

const Import = (props) => {
  const [ Page, setPage ] = useState(false);

  useEffect(() => {
    (async () => {
      let Component = (await props.element()).default;
      let Style = {};

      if (props.style) Style = await props.style();
      if (!Style) console.log('[Style]=> Not found:', props.element);

      setPage(<Component { ...props } style={ Style } />);
    })();
  }, [ props ]);

  return (
    <>
      { Page ? Page : <Loading /> }
    </>
  )
}

export default Import;