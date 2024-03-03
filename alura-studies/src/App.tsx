import Cronometro from './componentes/Cronometro';
import Form from './componentes/Form';
import ListaDeEstudos from './componentes/ListaDeEstudos';
import ListaDeEstudosProvider from './context/ListaDeEstudosContext';
import style from './style.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <ListaDeEstudosProvider>
        <Form/>
        <ListaDeEstudos/>
        <Cronometro/>
      </ListaDeEstudosProvider>
    </div>
  );
}

export default App;
