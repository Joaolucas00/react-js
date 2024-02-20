import styled from "styled-components"

const TituloPopulares = styled.h2`
    margin: 2% 10% 5% 0;
    color: #7B78E6;
    font-size: 32px;

`

const TituloNav = styled.h2`
    margin: 2% 0 5% 17%;
    color: #7B78E6;
    font-size: 32px;
`

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = () => {
    return (
        <>
            <TituloNav>Navegue pela galeria</TituloNav>
            <TituloPopulares>Populares</TituloPopulares>
        </>
    )
}

export default Galeria