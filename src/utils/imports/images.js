const files = import.meta.glob('../../assets/img/**/**/**/**/**/**/**/*', { eager: true });
let names = Object.keys(files);

let result = {};
for (let f of names) {
  let parts = String(f).toLowerCase().replace('../../assets/img/','').split('/');
  let last = parts.pop();
  let pointer = result;

  for (let p of parts) {
    pointer[p] = pointer[p] || {};
    pointer = pointer[p];
  }

  pointer[last.split('.')[0]] = files[f].default;
}

export default result;