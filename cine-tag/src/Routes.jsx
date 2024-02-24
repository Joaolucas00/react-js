import FavoritoProvider from "./context/FavoritosContext"
import MenuNavegacao from "./componentes/MenuNavegacao"
import Favoritos from "./paginas/Favoritos"
import Home from "./paginas/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function AppRoutes() {

  return (
    <BrowserRouter>
    <MenuNavegacao/>
    <FavoritoProvider>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favoritos" element={<Favoritos/>}/>
        </Routes>
    </FavoritoProvider>
    </BrowserRouter>
  )
}

export default AppRoutes
