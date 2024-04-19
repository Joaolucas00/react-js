import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./componentes/PaginaPadrao/PaginaPadrao";
import { RecoilRoot } from "recoil";
import Home from "./paginas/Home";
import Sorteio from "./paginas/Sorteio";


function AppRoutes() {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Home/>}/>
          <Route path="sorteio" element={<Sorteio/>}/>
        </Route>
      </Routes>
    </RecoilRoot>
    </BrowserRouter>
  );
}

export default AppRoutes;
