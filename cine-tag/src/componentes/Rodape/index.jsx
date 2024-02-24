import styled from "styled-components"

const FotterEstilizado = styled.footer`
    height: 10vh;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
`

const TituloFooter = styled.h3`
    font-size: 1.6rem;
    font-family: 'Montserrat';
    font-weight: 400;
    color: white;
    text-align: center;
`

const Rodape = () => {
    return(
        <FotterEstilizado>
            <TituloFooter>Desenvolvido pela Alura</TituloFooter>
        </FotterEstilizado>
    )
}

export default Rodape