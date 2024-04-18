import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante"
import { useMensagemErro } from "../../state/hook/useMensagemErro"
import styled from "styled-components"

const FormularioSorteio = styled.form`
    display: flex;
    width: 90%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    & p {
        color: #ff6767;
    }
    @media screen and (max-width: 800px) {
        display: flex;
        width: 90%;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        & > input, button {
            border-radius: 0;
        }
        & > input {
            width: 70%;
        }
        & > button {
            width: 50%;
            padding: 10px;
        }

    }
`

const InputTexto = styled.input`
    border: none;
    width: 45%;
    padding: 40px;
    height: 10%;
    border: 1px solid black;
    border-radius: 10% 0 0 10%;
`

const Botao = styled.button`
    padding: 40px;
    border: 1px solid black;
    width: 17%;
    border-radius: 0 10% 10% 0;
    height: 12vh;
    background-color: #7e7e7e;    
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