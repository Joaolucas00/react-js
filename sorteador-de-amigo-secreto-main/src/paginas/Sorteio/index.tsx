import { useState } from "react"
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio"


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
        <section>
            <form onSubmit={sortear}>
                <select value={participanteDaVez} onChange={e => setParticipanteDaVez(e.target.value)}required name="participanteDaVez" id="participanteDaVez" placeholder="Selecione o seu nome">
                    {participantes.map((participante) => <option key={participante}>{participante}</option>)}
                </select>
                <button>Sortear!</button>
            </form>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        </section>
    )
}

export default Sorteio