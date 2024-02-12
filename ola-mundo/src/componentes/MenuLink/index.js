import { Link, useLocation } from "react-router-dom"
import styles from './MenuLink.module.css'

const MenuLink = ({children, pathname}) => {

    const localizacao = useLocation()


    return (
        <Link className={`
            ${styles.link} 
            ${localizacao.pathname === pathname ? styles.linkDestacado : ""}
            `} 
            to={pathname}
        > {children} </Link>
    )
}


export default MenuLink