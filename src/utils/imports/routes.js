import { Route, Navigate } from 'react-router-dom';

import Page from './routes/pages';
import Layouts from './routes/layouts';

const files = import.meta.glob('../../views/**/**/**/**/**/**/**/*');

const routes = [];
for (let f in files) {
  let view = { name: f.replace('../../views/','').split('.')[0].toLowerCase() };

  if (f.toLowerCase().startsWith('../../views/private/')) {
    view.name = view.name.replace('private/','');
    view.layout = Layouts.private;
  } else {
    view.layout = Layouts.public;
  }

  if (f.toLowerCase().startsWith('../../views/main')) view.name = '/';

  routes.push(
    <Route key={ view.name } path={ view.name } element={ <view.layout element={ <Page /> } /> } />
  );
}

routes.push(
  <Route key="*" path="*" element={ <Navigate to="/" /> } />
);

export default routes;