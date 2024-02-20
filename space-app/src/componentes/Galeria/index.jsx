import styled from "styled-components"

const TituloPopulares = styled.h2`
    margin: 2% 10% 0 0;
    color: #7B78E6;
    font-size: 32px;

`

const TituloNav = styled.h2`
    margin: 2% 0 0 17%;
    color: #7B78E6;
    font-size: 32px;
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