import Form from './componentes/Form';
import ListaDeEstudos from './componentes/ListaDeEstudos';
import ListaDeEstudosProvider from './context/ListaDeEstudosContext';
import { IListaDeEstudos } from './interfaces/IListaDeEstudos';
import style from './style.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <ListaDeEstudosProvider>
        <Form/>
        <ListaDeEstudos/>
      </ListaDeEstudosProvider>
    </div>
  );
}

export default App;
