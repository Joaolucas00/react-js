import { styled } from 'styled-components'
import EstilosGlobais from './componentes/EstilosGlobais'
import Cabecalho from './componentes/Cabecalho'
import BarraLateral from './componentes/BarraLateral'
import Banner from './componentes/Banner'
import Galeria from './componentes/Galeria'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  `
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`

function App() {
  return (
    <FundoGradiente>
      <AppContainer>
        <Cabecalho/>
        <BarraLateral/>
        <ConteudoGaleria>
          <Galeria/>
        </ConteudoGaleria>
      </AppContainer>
      <EstilosGlobais/>
    </FundoGradiente>
  )
}

export default App
