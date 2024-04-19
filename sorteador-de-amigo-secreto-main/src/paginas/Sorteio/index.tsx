import { useState } from "react"
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio"
import styled from "styled-components"




const SecaoEstilizada = styled.section`
    display: flex;
    width: 100%;
    height: 50vh;
    flex-direction: column;
    align-items: center;
    gap: 50px;

`

const FormSorteio = styled.form`
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 50px;
    
    & > button {
        background-color: #FE652B;
        width: 20%;
        color: white;
        font-size: 1.5rem;
        height: 10vh;
        border: 1px solid black;
        border-radius: 50px;
        box-shadow: 2px 2px 0px 1px #000000;
        cursor: pointer;
    }

    & > select {
        width: 40%;
        height: 10vh;
        border-radius: 50px;
        padding-left: 70px;
        box-shadow: 2px 2px 0px 1px #000000;
    }

    @media screen and (max-width: 800px) {
        & > button {
            width: 100%;
        }

        & > select {
            width: 90%;
        }
    }


`

const TituloAmigoSecreto = styled.h2`
    color:#FE652B;
    font-size: 1.8rem;
`





const Sorteio = () => {

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const participantes = useListaParticipantes()

    const resultado = useResultadoSorteio()

    const sortear = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (resultado.has(participanteDaVez)) setAmigoSecreto(resultado.get(participanteDaVez)!)
    }

    return (
        <SecaoEstilizada>
            <FormSorteio onSubmit={sortear}>
                <select value={participanteDaVez} onChange={e => setParticipanteDaVez(e.target.value)}required name="participanteDaVez" id="participanteDaVez" placeholder="Selecione o seu nome">
                    <option value='Selecione seu nome' disabled selected>Selecione seu nome</option>
                    {participantes.map((participante) => <option key={participante}>{participante}</option>)}
                </select>
                <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
                <button>Sortear!</button>
            </FormSorteio>

            {amigoSecreto && <TituloAmigoSecreto role="alert">{amigoSecreto}</TituloAmigoSecreto>}
            <img src="imagens/aviao.png" alt="avia de papel"/>
        </SecaoEstilizada>
    )
}

export default Sorteio