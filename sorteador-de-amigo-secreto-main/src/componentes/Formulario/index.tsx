import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante"
import { useMensagemErro } from "../../state/hook/useMensagemErro"
import styled from "styled-components"

const FormularioSorteio = styled.form`
    display: flex;
    width: 90%;
    margin-bottom: 50px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    & p {
        color: #ff6767;
    }
    @media screen and (max-width: 800px) {
        width: 90%;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;

        & > input {
            width: 100%;
            font-size: 1rem;
            border-radius: 50px;
        }
        & > button {
            width: 50%;
            padding: 10px;
            border-radius: 50px;
        }

    }
`

const InputTexto = styled.input`
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    height: 82px;
    width: 70%;
    box-sizing: border-box;
    padding-left: 32px;
    font-size: 20px;
    border: 2px solid black;
    box-shadow: 0px 2px 0px 1px #000000;
`

const Botao = styled.button`
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    height: 82px;
    width: 30%;
    box-sizing: border-box;
    border: 2px solid black;
    font-size: 20px;
    color: #000000;
    box-shadow: 2px 2px 0px 1px #000000;
    cursor: pointer;
    background-color: #c4c4c4; 
    &:disabled {
        background-color: #C4C4C4;
    }
`

const Formulario = () => {

    const [nome, setNome] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const adicionar = useAdicionarParticipante()

    const mensagemErro = useMensagemErro()

    const adicionarParticipante = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        adicionar(nome)
        setNome('')
        inputRef.current?.focus()

    }

    return (
        <FormularioSorteio onSubmit={adicionarParticipante}>
            <InputTexto ref={inputRef} value={nome} onChange={(e:  React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} type="text" placeholder='Insira os nomes dos participantes'/>
            <Botao disabled={!nome} >Adicionar</Botao>
            {mensagemErro && <p role="alert">{mensagemErro}</p>}
        </FormularioSorteio>
    )
}

export default Formulario