import styled from "styled-components"


const ConteinerFlex = styled.section`
    display: flex;
    h1 { 
        font-family: 'Montserrat';
        font-weight: 400;
    }
`

const TituloEstilizado = styled.h1`

`

const ConteudosCards = styled.section`

`

const Home = () => {
    return(
        <ConteinerFlex>
            <TituloEstilizado>Um lugar para guardar seus vídeos!</TituloEstilizado>
            <ConteudosCards>

            </ConteudosCards>
        </ConteinerFlex>
    )
}

export default Home