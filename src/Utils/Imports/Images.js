const Files = import.meta.glob('../../Assets/Images/**/**/**/**/**/**/**/*', { eager: true });

let result = {};
for (let f in Files) {
  let parts = String(f).replace('../../Assets/Images/','').split('/');

  let last = parts.pop();
  let pointer = result;

  for (let p of parts) {
    pointer[p] = pointer[p] || {};
    pointer = pointer[p];
  }

  pointer[last.split('.')[0]] = Files[f].default;
}

export default result;