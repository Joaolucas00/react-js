import { Outlet } from "react-router-dom"
import EstilosGlobais from "../EstilosGlobais"
import Header from "../Header"


const PaginaPadrao = () => {
    return (
        <>
            <EstilosGlobais/>
            <Header/>
            <Outlet/>
        </>
    )
}

export default PaginaPadrao