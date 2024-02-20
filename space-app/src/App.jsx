import { styled } from 'styled-components'
import EstilosGlobais from './componentes/EstilosGlobais'
import Cabecalho from './componentes/Cabecalho'
import BarraLateral from './componentes/BarraLateral'
import Galeria from './componentes/Galeria'
import Tags from './componentes/Tags'
import { useState } from 'react'

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
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
    align-content: center;
    justify-content: space-between;
`

function App() {
  return (
    <FundoGradiente>
      <AppContainer>
        <Cabecalho/>
        <BarraLateral/>
        <Tags></Tags>
        <ConteudoGaleria>
          <Galeria/>
        </ConteudoGaleria>

      </AppContainer>
      <EstilosGlobais/>
    </FundoGradiente>
  )
}

export default App
