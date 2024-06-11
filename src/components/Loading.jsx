// Importação dos CSS que serão utilizados
import style from '../assets/css/components/loading.module.css'

import img from '../assets/img/loading.gif'

const Component = () => {
  return (
    <div className={ style.container }>
      <img src={ img } className={ style.loading }/>
    </div>
  );
};

export default Component;