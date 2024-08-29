import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom'

import Load from '../Functions/Load'

const Files = import.meta.glob('../../Views/**/**/**/**/**/**/*');
const Styles = import.meta.glob('../../Assets/CSS/Views/**/**/**/**/**/**/*');

const Routes = [];
for (let f in Files) {
  let Page = { name: f.replace('../../Views/','').toLowerCase().split('.')[0] }

  if (Page.name.startsWith('private/')) {
    Page.name = Page.name.replace('private/','');
    Page.layout = lazy(() => import('../../Layouts/Private'));
  } else {
    Page.layout = lazy(() => import('../../Layouts/Public'));;
  }

  let css = Object.keys(Styles)
    .find((r) => {
      let css = r.replace('../../Assets/CSS/Views/','').toLowerCase().split('.')[0];
      if (css.startsWith('private/')) css = css.replace('private/','');
      return (Page.name.includes(css));
    });

  if (Page.name == 'main') Page.name = '/'; 

  Routes.push(
    <Route 
      key={ Page.name }
      path={ Page.name }
      element={ 
        <Page.layout element={ 
          <Load 
            element={ Files[f] }
            style={ Styles[css] }
          /> 
        } />
      }
    />
  )

}

Routes.push(
  <Route key="*" path="*" element={ <Navigate to="/" /> } />
)

export default Routes;
