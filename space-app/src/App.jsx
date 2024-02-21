import { styled } from 'styled-components'
import EstilosGlobais from './componentes/EstilosGlobais'
import Cabecalho from './componentes/Cabecalho'
import BarraLateral from './componentes/BarraLateral'
import Galeria from './componentes/Galeria'
import Tags from './componentes/Tags'
import { useState } from 'react'
import fotos from './fotos.json'
import ModalZoom from './componentes/ModalZoom'

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
    width: 80%;
    margin: auto;
`

function App() {

  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  return (
    <FundoGradiente>
      <AppContainer>
        <Cabecalho/>
        <BarraLateral/>
        <Tags></Tags>
        <ConteudoGaleria>
          <Galeria aoSelecionarFoto={foto => setFotoSelecionada(foto)} fotos={fotosGaleria}/>
        </ConteudoGaleria>
      </AppContainer>
      <ModalZoom aoFechar={() => setFotoSelecionada(null)} foto={fotoSelecionada}></ModalZoom>
      <EstilosGlobais/>
    </FundoGradiente>
  )
}

export default App
