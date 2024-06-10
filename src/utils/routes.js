import { lazy } from 'react';

// Importação dos layouts
import Public from '../layouts/Public'

// Importação das rotas
const files = import.meta.glob('../views/**/**/**/**/**/**/**/*');

let routes = [];
for (let f in files) {
  let r = {
    name: f.replace('../views/','').split('.')[0].toLowerCase(),
    file: lazy(files[f]),
    layout: Public
  }

  if (r.name == 'main') r.name = '/';

  routes.push(r);
}

export default routes;