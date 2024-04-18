import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./componentes/PaginaPadrao/PaginaPadrao";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
