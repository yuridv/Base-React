import { lazy } from 'react';

const files = import.meta.glob('../../../layouts/**/**/**/**/**/**/**/*');

let layouts = {};
for (let f in files) {
  let layout = {
    name: f.replace('../../../layouts/','').split('.')[0].toLowerCase(),
    file: lazy(files[f])
  }

  layouts[layout.name] = layout.file;
}

export default layouts;