import FavoritoProvider from "./context/FavoritosContext"
import PaginaPrincipal from "./componentes/PaginaPrincipal"
import Favoritos from "./paginas/Favoritos"
import Home from "./paginas/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EstilosGlobais from "./componentes/EstilosGlobais"


function AppRoutes() {

  return (
    <BrowserRouter>
    <EstilosGlobais/>
    <FavoritoProvider>
      <Routes>
          <Route path="/" element={<PaginaPrincipal/>}>
            <Route index element={<Home/>}/>
            <Route path="favoritos" element={<Favoritos/>}/>
            <Route path="player" element={<h1>PlayVideo</h1>}/>
          </Route>
        </Routes>
    </FavoritoProvider>
    </BrowserRouter>
  )
}

export default AppRoutes
