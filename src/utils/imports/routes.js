import { Route, Navigate } from 'react-router-dom'

import Layouts from './layouts'

const files = import.meta.glob('../../views/**/**/**/**/**/**/**/*');

let routes = [];
for (let f in files) {
  let r = {
    name: f.replace('../../views/','').split('.')[0].toLowerCase(),
    layout: Layouts.public
  }

  if (r.name == 'main') r.name = '/';

  routes.push(
    <Route key={ r.name } path={ r.name } element={ <r.layout /> } />
  );
}

routes.push(
  <Route key="*" path="*" element={ <Navigate to="/" /> } />
);

export default routes;