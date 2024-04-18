import { useEffect, useRef, useState } from "react"
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante"
import { useMensagemErro } from "../../state/hook/useMensagemErro"


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
        <form onSubmit={adicionarParticipante}>
            <input ref={inputRef} value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder='Insira os nomes dos participantes'/>
            <button disabled={!nome} >Adicionar</button>
            {mensagemErro && <p role="alert">{mensagemErro}</p>}
        </form>
    )
}

export default Formulario