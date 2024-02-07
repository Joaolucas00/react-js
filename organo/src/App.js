import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/time';

function App() {

  const [cadastrado, setCadastrado] = useState([])

  const aoCadastro = (colaborador) => {
    console.log("Cadastro: ", colaborador);
    setCadastrado([...cadastrado, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoCadastrar={cadastro => aoCadastro(cadastro)} titulo="Formulário" method="get" action="/" autocomplete="on"/>
      <Time titulo="PHP"/>
    </div>
  );
}

export default App;
