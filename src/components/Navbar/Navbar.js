import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
import logo from '../../logo.png'


const Navbar = () => {
  return (
    <div className={styles.navBar}>
        <img src={logo} className={styles.logo} alt="logo"/>
        <div className={styles.containerText}>
            <Link to='/catalogo' className={styles.text}>Catálogo</Link>
            <Link to='/carrito' className={styles.text}>Carrito</Link>
        </div>

    </div>
  )
}

export default Navbar