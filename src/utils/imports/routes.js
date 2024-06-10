import { lazy } from 'react';

const files = import.meta.glob('../../views/**/**/**/**/**/**/**/*');

import Public from '../../layouts/Public'
import Private from '../../layouts/Public'

let routes = [];
for (let f in files) {
  let r = {
    name: f.replace('../../views/','').split('.')[0].toLowerCase(),
    file: lazy(files[f]),
    layout: Public
  }

  if (r.name == 'main') r.name = '/'; 
  if (r.name.startsWith('private/')) r.layout = Private;

  r.name = r.name
    .replace('public/','')
    .replace('private/','')

  routes.push(r);
}

export default routes;