const files = import.meta.glob('../../assets/img/**/**/**/**/**/**/**/*', { eager: true });

const Images = (images) => {
  let result = {};
  for (let img of images) {
    let r = Object.keys(files)
      .find((r) => 
        r == img || 
        String(r).toLowerCase().replace('../../assets/img/','').split('.')[0] == String(img).toLowerCase().split('.')[0]
      )

    img = img.split('.')[0]

    let file = 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png';
    if (files[r] && files[r].default) file = files[r].default;

    let obj = result;
    let imgs = img.split("/")
    for (let i = 0; i < imgs.length; i++) {
      if (i == (imgs.length - 1)) obj[imgs[i]] = file;
      if (!obj[imgs[i]]) obj[imgs[i]] = {};
      obj = obj[imgs[i]];
    }
  }

  return result;
}

export default Images;