import { lazy, Suspense } from 'react';

const files = import.meta.glob('../../components/**/**/**/**/**/**/**/*');
let names = Object.keys(files);

const css = import.meta.glob('../../assets/css/**/**/**/**/**/**/**/*');
console.log(css)

let result = {};
for (let f of names) {
  let parts = String(f).replace('../../components/','').split('/');
  let last = parts.pop();
  let pointer = result;

  for (let p of parts) {
    pointer[p] = pointer[p] || {};
    pointer = pointer[p];
  }


  pointer[last.split('.')[0]] = lazy(files[f]);

  // console.log(css[f.replace('../../','../../assets/css/').replace('.jsx','.module.css').toLowerCase()]);
  // let LazyComponent = lazy(files[f]);
  // pointer[last.split('.')[0]] = () => (
  //   <Suspense fallback={<div>Loading...</div>}>
  //     <LazyComponent style='123' />
  //   </Suspense>
  // );
}

export default result;