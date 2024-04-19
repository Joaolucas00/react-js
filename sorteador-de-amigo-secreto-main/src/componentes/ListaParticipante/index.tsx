import { useListaParticipantes } from "../../state/hook/useListaParticipantes"


jest.mock('', () => {
    
})

const ListaParticipante = () => {
    const participantes: string[] = useListaParticipantes()
    return (
        <ul>
            {participantes.map(participante => <li key={participante}>{participante}</li>)}
        </ul>
    )
}

export default ListaParticipante