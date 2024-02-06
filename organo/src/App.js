import Banner from './componentes/Banner';
import Input from './componentes/Input';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Input label="Nome" placeholder="digite seu nome"/>
      <Input label="Cargo" placeholder="digite seu cargo"/>
      <Input label="Imagem" placeholder="Informe o endereço da imagem"/>
      <Input label="Time" placeholder=""/>
    </div>
  );
}

export default App;
