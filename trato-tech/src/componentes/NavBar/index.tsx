import styles from './NavBar.module.scss'
import logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { RiShoppingCart2Line } from 'react-icons/ri'
import Busca from '../Busca'


const NavBar = () => {

    const localizacao = useLocation()
    
    return (
        <nav className={styles.nav}>
            <img className={styles.logo} src={logo} alt='Logo trato tech'></img>
            <div className={styles.link}>
                <div>
                <Link to='/' className={`${ localizacao.pathname === '/' ? styles.selected : styles.link}`}>Página inicial</Link>
                </div>
            </div>
            <div className={styles.busca}>
                <Busca/>
            </div>
            <div className={styles.icones}>
                <Link to='/carrinho'>
                    <RiShoppingCart2Line color='white' size={24}/>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar