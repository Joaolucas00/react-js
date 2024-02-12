import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  //const pagina = window.location.pathname === "/sobremim" ? <SobreMim/> : <Inicio/> JavaScript puro (quase)


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/sobremim" element={<SobreMim/>}/>
          <Route path="*" element={<h1>Página não encontrada</h1>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
