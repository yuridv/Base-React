import { lazy } from 'react'

const files = import.meta.glob('../../layouts/**/**/**/**/**/**/**/*');

let layout = {};
for (let f in files) {
  let r = {
    name: f.replace('../../layouts/','').split('.')[0].toLowerCase(),
    layout: lazy(files[f])
  }

  layout[r.name] = r.layout;
}

export default layout;