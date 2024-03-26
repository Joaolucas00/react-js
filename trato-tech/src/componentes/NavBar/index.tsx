import styles from './NavBar.module.scss'
import logo from '../../assets/logo.svg'

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <img className={styles.logo} src={logo} alt='Logo trato tech'></img>
            <div className={styles.link}>
                <h1>Ola</h1>
            </div>
        </nav>
    )
}

export default NavBar