import { lazy } from 'react';

import Load from '../Functions/Load'

const Files = import.meta.glob('../../Components/**/**/**/**/**/**/**/*');
const Styles = import.meta.glob('../../Assets/CSS/Components/**/**/**/**/**/**/*');

let result = {};
for (let f in Files) {
  let parts = String(f).replace('../../Components/','').split('/');
  let last = parts.pop();
  let pointer = result;

  for (let p of parts) {
    pointer[p] = pointer[p] || {};
    pointer = pointer[p];
  }

  let css = Object.keys(Styles)
    .find((r) => {
      let name = f.replace('../../Components/','').toLowerCase().split('.')[0];
      let css = r.replace('../../Assets/CSS/Components/','').toLowerCase().split('.')[0];
      return (name.includes(css));
    });

  Object.assign(pointer, {
    get [last.split('.')[0]]() {
      return (props) => {
        return <Load { ...props } element={ Files[f] } style={ Styles[css] } />
      }
    },
  });
}

export default result;