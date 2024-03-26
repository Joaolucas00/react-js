import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "./componentes/PaginaPadrao"



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
