import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuNav from "./componentes/MenuNav";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Conteudo from "paginas/Conteudo";

function AppRoutes() {
  //const pagina = window.location.pathname === "/sobremim" ? <SobreMim/> : <Inicio/> JavaScript puro (quase)

  
  return (
      <BrowserRouter>
        <MenuNav/>
        <Routes>
          <Route path="/" element={<PaginaPadrao/>}> {/* Rotas Aninhadas. Rota pai */}
            <Route index element={<Inicio/>} />
            <Route path="sobremim" element={<SobreMim/>}/>
            <Route path="posts/:id" element={<Conteudo/>}/>
          </Route>
          
          <Route path="*" element={<h1>Página não encontrada</h1>}/>
        </Routes>

        <Rodape/>
      </BrowserRouter>
  )
}

export default AppRoutes;


