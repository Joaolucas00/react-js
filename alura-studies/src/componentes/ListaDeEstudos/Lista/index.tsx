import { IListaDeEstudos } from "../../../interfaces/IListaDeEstudos"
import style from '../style.module.scss'

interface ListaProps {
    listaDeEstudos: IListaDeEstudos
}

const Lista = ({listaDeEstudos}: ListaProps) => {
    return (
    <li className={style.item}>
        <h3>{listaDeEstudos.aula}</h3>
        <span>{listaDeEstudos.tempo}</span>
    </li>
)
}

export default Lista