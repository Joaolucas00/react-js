import { useState } from "react"
import { IListaDeEstudos } from "../../interfaces/IListaDeEstudos"
import style from './style.module.scss'
import Lista from "./Lista"

const ListaDeEstudos = () => {

    const [listaDeEstudos, setListaDeEstudos] = useState<IListaDeEstudos[]>([
        {aula: "Java", tempo: "01:00:00"},
    ]) 

    return (
        (listaDeEstudos.length > 0) ? <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {listaDeEstudos.map((estudo, index) => {
                    return (<Lista key={index} listaDeEstudos={estudo}/>)
                })} 
            </ul> 
        </aside> : <aside className={style.listaTarefas}><h2>Não há estudos</h2></aside>
    )
}

export default ListaDeEstudos