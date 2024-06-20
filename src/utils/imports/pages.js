import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'

let Page = {};
let Style = {};

const Import = () => {
  const [ ready, setReady ] = useState(false);

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setReady(false);
      let file = await Files(location.pathname);
      if (file.error) return navigate('/');
      Page = file.page;
      Style = file.style;
      setReady(true);
    })();
  }, [ location.pathname ])

  return (
    ready && <Page />
  )
}