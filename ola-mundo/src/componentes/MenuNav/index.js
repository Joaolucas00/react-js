import MenuLink from '../MenuLink'
import styles from './MenuNav.module.css'

const MenuNav = () => {
    return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink pathname='/'>Início</MenuLink>
            <MenuLink pathname='/sobremim'>Sobre mim</MenuLink>
        </nav>
    </header>)
}

export default MenuNav