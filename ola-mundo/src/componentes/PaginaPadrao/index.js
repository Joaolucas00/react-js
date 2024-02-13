import Banner from "componentes/Banner"
import { Outlet } from "react-router-dom"


const PaginaPadrao = () => {
    return (
        <main>
            <Banner/>


            <Outlet/> {/** indica onde as rotas vão ser renderizadas */}
        </main>
    )
}

export default PaginaPadrao