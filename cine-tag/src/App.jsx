import MenuNavegacao from "./componentes/MenuNavegacao"
import Favoritos from "./paginas/Favoritos"
import Home from "./paginas/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
    <MenuNavegacao/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
