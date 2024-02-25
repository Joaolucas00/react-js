import FavoritoProvider from "./context/FavoritosContext"
import PaginaPrincipal from "./componentes/PaginaPrincipal"
import Favoritos from "./paginas/Favoritos"
import Home from "./paginas/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Player from "./paginas/Player"


function AppRoutes() {

  return (
    <BrowserRouter>
    <EstilosGlobais/>
    <FavoritoProvider>
      <Routes>
          <Route path="/" element={<PaginaPrincipal/>}>
            <Route index element={<Home/>}/>
            <Route path="favoritos" element={<Favoritos/>}/>
            <Route path="player/:id" element={<Player/>}/>
          </Route>
          <Route path="*" element={<h1>Não Encontrado 404</h1>}></Route>
        </Routes>
    </FavoritoProvider>
    </BrowserRouter>
  )
}

export default AppRoutes
