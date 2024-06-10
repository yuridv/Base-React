// Importação dos CSS que serão utilizados
import style from '../assets/css/components/navbar.module.css'

const Navbar = () => {
  return (
    <div className={ style.container }>
      <h2 className={ style.center }>Navbar</h2>
    </div>
  );
};

export default Navbar;