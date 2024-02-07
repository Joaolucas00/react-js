import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [cadastrado, setCadastrado] = useState([])

  const aoCadastro = (colaborador) => {
    console.log("Cadastro: ", colaborador);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoCadastrar={cadastro => aoCadastro(cadastro)} titulo="Formulário" method="get" action="/" autocomplete="on"/>
    </div>
  );
}

export default App;
