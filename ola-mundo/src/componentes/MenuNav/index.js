import styles from './MenuNav.module.css'
import { Link } from 'react-router-dom'

const MenuNav = () => {
    return (
    <header>
        <nav className={styles.navegacao}>
            <Link className={styles.link} to='/'>Início</Link>
            <Link className={styles.link} to='/sobremim'>Sobre mim</Link>
        </nav>
    </header>)
}

export default MenuNav