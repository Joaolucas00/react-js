import { useListaDeEstudos } from "../../../context/ListaDeEstudosContext"
import { IListaDeEstudos } from "../../../interfaces/IListaDeEstudos"
import style from '../style.module.scss'

interface ListaProps {
    listaDeEstudosCorrente: IListaDeEstudos
}

const Lista = ({listaDeEstudosCorrente}: ListaProps) => {

    const {listaDeEstudos, estudoSelecionado, setEstudoSelecionado, setListaDeEstudos} = useListaDeEstudos()

    const selecionarEstudo = (estudo_selecionado: IListaDeEstudos) => {
        setEstudoSelecionado(estudo_selecionado)
        setListaDeEstudos(estudoAnterior => estudoAnterior.map(estudo => ({
            ...estudo, selecionado: estudo.id === estudo_selecionado.id ? true : false
        })))

        console.log("Lista de estudos:  ", listaDeEstudos);
        console.log("Estudo selecionado:  ", estudoSelecionado);
        
        
    }
    

    return (
    <li className={`${style.item} ${listaDeEstudosCorrente.selecionado ? style.itemSelecionado: ''}`} onClick={() => selecionarEstudo(listaDeEstudosCorrente)}>
        <h3>{listaDeEstudosCorrente.aula}</h3>
        <span>{listaDeEstudosCorrente.tempo}</span>
    </li>
)
}

export default Lista