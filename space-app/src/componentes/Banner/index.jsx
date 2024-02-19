import styled from "styled-components"


const FiguraEstilizada = styled.figure` 
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    background-position: center center;
    flex-grow: 1;
    border-radius: 20px;
    max-width: 100%;
    min-height: 328px;
    margin: 0;
    background-size: cover;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 48px;
    color: white;
    max-width: 300px;
    padding: 0 64px;
    

`


const Banner = ({ texto }) => {
    return (
        <FiguraEstilizada $backgroundImage="/imagens/planeta-terra-3.jpg">
            <TituloEstilizado>{texto}</TituloEstilizado>
        </FiguraEstilizada>  
    )
}

export default Banner