import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "./componentes/PaginaPadrao"
import Home from "./paginas/Home"
import Categoria from "./paginas/Categoria"
import NotFound from "./paginas/NotFound"
import Carrinho from "./paginas/Carrinho"
import Anuncie from "./paginas/Anuncie"
import Pagamento from "./paginas/Pagamento"



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Home/>}/>
          <Route path="categoria/:nomeCategoria" element={<Categoria/>}/>
          <Route path="carrinho" element={<Carrinho/>}/>
          <Route path="anuncie/:nomeCategoria" element={<Anuncie/>}/>
          <Route path="anuncie" element={<Anuncie/>}/>
          <Route path="pagamento" element={<Pagamento/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
