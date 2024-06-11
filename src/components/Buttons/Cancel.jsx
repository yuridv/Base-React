// Importação dos CSS que serão utilizados
import style from '../../assets/css/components/buttons/cancel.module.css'

const Component = () => {
  return (
    <div className={ style.center }>
      <button className={ style.button }>Cancelar</button>
    </div>
  );
};

export default Component;