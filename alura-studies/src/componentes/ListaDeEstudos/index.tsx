import { useState } from "react"
import { IListaDeEstudos } from "../../interfaces/IListaDeEstudos"
import './style.scss'

const ListaDeEstudos = () => {

    const [listaDeEstudos, setListaDeEstudos] = useState<IListaDeEstudos[]>([
        {aula: "Java", tempo: "01:00:00"}
    ]) 

    
    return (
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {listaDeEstudos.map((estudo, index) => {
                    return (
                        <li key={index} className="item">
                            <h3>{estudo.aula}</h3>
                            <span>{estudo.tempo}</span>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default ListaDeEstudos