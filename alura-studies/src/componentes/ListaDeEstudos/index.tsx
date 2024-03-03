import { useState } from "react"
import { IListaDeEstudos } from "../../interfaces/IListaDeEstudos"
import style from './style.module.scss'

const ListaDeEstudos = () => {

    const [listaDeEstudos, setListaDeEstudos] = useState<IListaDeEstudos[]>([
        {aula: "Java", tempo: "01:00:00"}
    ]) 

    return (
        (listaDeEstudos.length > 0) ? <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {listaDeEstudos.map((estudo, index) => {
                    return (
                        <li key={index} className={style.item}>
                            <h3>{estudo.aula}</h3>
                            <span>{estudo.tempo}</span>
                        </li>
                    )
                })} 
            </ul> 
        </aside> : <aside className={style.listaTarefas}><h2>Não há estudos</h2></aside>
    )
}

export default ListaDeEstudos