import { Outlet } from "react-router-dom"
import EstilosGlobais from "../../componentes/EstilosGlobais"
import NavBar from "../../componentes/NavBar"
import styles from './PaginaPadrao.module.scss'
import Footer from "../Footer"


const PaginaPadrao = () => {
    return (
        <div className={styles.container}>
            <EstilosGlobais/>
            <NavBar/>
            <div className={styles.containerOutlet}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default PaginaPadrao