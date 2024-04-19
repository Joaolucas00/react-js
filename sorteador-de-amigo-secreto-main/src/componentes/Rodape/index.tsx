import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"
import styled from "styled-components"
import { useSorteador } from "../../state/hook/useSorteador"



const FooterEstilizado = styled.footer`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    gap: 10%;
    margin-top: 50px;

    & > button {
        border: 2px solid black;
        font-size: 1.5rem;
        padding: 20px;
        text-align: center;
        width: 30%;
        height: 10vh;
        border-radius: 50px;
        background-color: #FE652B;
        box-shadow: 0 0 0 black;
        cursor: pointer;
    }

    & > button:hover {
        background-color: #4B69FD;
    }

    & > button:disabled {
        background-color: #ffa483;
        cursor: default;
    }


    @media screen and (max-width: 800px) { 
        flex-direction: column;
        & > button {
            font-size: 1rem;
            width: 80%;
        }
    }
`

const Rodape = () => {
    
    const participantes = useListaParticipantes()

    const navigate = useNavigate()

    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
        navigate('/sorteio')
    }


    return (
        <FooterEstilizado>
            <button disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira!</button>
            <img src="imagens/sacolas.png" alt="sacola"/>
        </FooterEstilizado>
    )
}

export default Rodape