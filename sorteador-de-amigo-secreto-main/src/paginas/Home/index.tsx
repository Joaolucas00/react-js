import styled from "styled-components"
import Formulario from "../../componentes/Formulario"

const MainEstilizado = styled.main`
    display: flex;
    background-color: white;
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    border-radius: 10% 10% 0 0;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
`

const Titulo = styled.h1`
    color: #4B69FD;
    font-size: 3rem;
    text-align: center;

`

const Home = () => {
    return (
        <MainEstilizado>
            <Titulo>Vamos começar</Titulo>
            <Formulario/>
        </MainEstilizado>
    )
}

export default Home