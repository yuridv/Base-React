import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import { LoadingContext } from "../../../context/Loading";

let Page = {};
let Style = {};

const Import = () => {
  const { setLoad } = LoadingContext();
  const [ ready, setReady ] = useState(false);

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoad(true);
      setReady(false);

      let file = await Files(location.pathname);
      console.log(file)
      if (file.error) return navigate('/');

      Page = file.page;
      Style = file.style;

      setReady(true);
      setLoad(false);
    })();
  }, [ location.pathname ])

  return (
    ready && <Page style={ Style } />
  )
}

export default Import;

const pages = import.meta.glob('../../../views/**/**/**/**/**/**/**/*');
const styles = import.meta.glob('../../../assets/css/views/**/**/**/**/**/**/**/*');

const Files = async (path) => {
  if (path == '/') path = '/main';

  let page = Object.keys(pages)
    .find((r) => [path, '/private'+path].includes(String(r).toLowerCase().replace('../../../views','').split('.')[0]));
  if (!page) return { error: 'PAGE_NOT_FOUND' }

  let style = Object.keys(styles)
    .find((r) => [path, '/private'+path].includes(String(r).toLowerCase().replace('../../../assets/css/views','').split('.')[0]));
  console.log([path, '/private'+path])

  return {
    page: (await pages[page]()).default,
    style: style ? (await styles[style]()) : { error: 'STYLE_NOT_FOUND' }
  }
}