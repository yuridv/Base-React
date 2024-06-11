import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Loading from '../../components/Loading'

let Page = {};
let Style = {};

const Load = () => {
  let [load, setLoad] = useState(true);
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(()=> {
    (async ()=> {
      let find = await Pages(location.pathname);
      if (find.error) return navigate('/');
      Page = find.page;
      Style = find.style;

      setLoad(false);
    })();
  })

  return (
    <>
      { load ? <Loading /> : <Page style={ Style } /> }
    </>
  )
}

export default Load;

const pages = import.meta.glob('../../views/**/**/**/**/**/**/**/*');
const styles = import.meta.glob('../../assets/css/views/**/**/**/**/**/**/**/*');

const Pages = async (path) => {
  if (path == '/') path = '/main'

  let page = Object.keys(pages)
    .find((r) => r.toLocaleLowerCase().replace('../../views','').split('.')[0] == path);
  if (!page) return { error: 'PAGE_NOT_FOUND' };

  let style = Object.keys(styles)
    .find((r) => r.toLocaleLowerCase().replace('../../assets/css/views','').split('.')[0] == path);

  return {
    page: (await pages[page]()).default,
    style: style ? await styles[style]() : { error: 'STYLE_NOT_FOUND' }
  }
}