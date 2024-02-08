import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [cadastrado, setCadastrado] = useState([])

  const aoCadastro = (colaborador) => {
    console.log("Cadastro: ", colaborador);
    setCadastrado([...cadastrado, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoCadastrar={cadastro => aoCadastro(cadastro)} titulo="Formulário" method="get" action="/" autocomplete="on"/>

    {times.map(time => <Time titulo={time.nome} />)}

      <Time titulo="PHP"/>
    </div>
  );
}

export default App;
