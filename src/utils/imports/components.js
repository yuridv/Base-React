import { lazy } from 'react';

import Page from '../functions/Pages'

const files = import.meta.glob('../../components/**/**/**/**/**/**/**/*');
const styles = import.meta.glob('../../assets/css/components/**/**/**/**/**/**/*');

let result = {};
for (let f of Object.keys(files)) {
  let parts = String(f).replace('../../components/','').split('/');
  let last = parts.pop();
  let pointer = result;

  for (let p of parts) {
    pointer[p] = pointer[p] || {};
    pointer = pointer[p];
  }

  let Component = lazy(files[f]);

  let css = Object.keys(styles)
    .find((r) => (f.replace('../../components/','').toLowerCase().split('.')[0]).includes(String(r).toLowerCase().replace('../../assets/css/components/','').split('.')[0]));

  Object.assign(pointer, {
    get [last.split('.')[0]]() {
      return <Page Component={ Component } CSS={ styles[css] } />
    },
  });
}

export default result;