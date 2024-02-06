import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario titulo="Formulário" method="post" action="/" autocomplete="on"/>
    </div>
  );
}

export default App;
