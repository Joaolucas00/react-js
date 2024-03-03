import Form from './componentes/Form';
import ListaDeEstudos from './componentes/ListaDeEstudos';
import style from './style.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <ListaDeEstudos/>
    </div>
  );
}

export default App;
