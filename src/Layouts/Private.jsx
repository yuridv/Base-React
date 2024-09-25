import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Components } from '../Utils/Imports'
import { AuthContext } from '../Contexts/Authenticate'

import style from '../Assets/CSS/Layouts/Private.module.css'

const Layout = ({ element }) => {
  const navigate = useNavigate();

  const { user } = AuthContext();

  useEffect(() => {
    if (!user) return navigate('/');
  }, [user]);

  return (
    <div className={ style.container }>
      <h1>PRIVATE LAYOUT</h1>
      { element }
    </div>
  )
}

export default Layout;