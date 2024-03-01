import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/time';
import {v4 as uuidv4} from 'uuid'

function App() {
  // useEffect, faz com que o React executar algo só depois do componente ser redenrizado
  // pode causar looping ifinito, primeiro argumento é a fn a ser executada, o segundo um array que pode ser vazio, ou ter uma depedencia

  const [times, setTimes] = useState([
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
  ])

  const [cadastrado, setCadastrado] = useState([])

  const aoCadastro = (colaborador) => {
    console.log("Cadastro: ", cadastrado);
    setCadastrado([...cadastrado, colaborador])
  }

  const aoCriarTime = (novoTime) => {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  const deletarColaborador = (id) => {
    setCadastrado(cadastrado.filter(colaborador => colaborador.id !== id))
  }

  const aoFavoritar = (pessoa) => {
    setCadastrado(cadastrado.map(colaborador => {
      if (colaborador.id === pessoa.id) {
        colaborador.favorito = !pessoa.favorito
      }
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner src='/imagens/banner.png' alt='banner do organo'/>
      <Formulario times={times.map(time => time.nome)} aoCadastrar={cadastro => aoCadastro(cadastro)} titulo="Dados do colaborador" method="get" action="/" autocomplete="on" aoCriarTime={(time) => aoCriarTime(time)}/>

    {times.map(time => <Time 
      key={time.nome} 
      titulo={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      cadastrados={cadastrado.filter(colaborador => colaborador.time === time.nome)}
      aoDeletar={deletarColaborador}
      aoFavoritar={aoFavoritar}
      />)}

    </div>
  )
}

export default App;
