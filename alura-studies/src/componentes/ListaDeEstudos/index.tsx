import { useState } from "react"
import { IListaDeEstudos } from "../../interfaces/IListaDeEstudos"
import style from './style.module.scss'
import Lista from "./Lista"
import {v4 as uuIdv4} from 'uuid'
import { useListaDeEstudos } from "../../context/ListaDeEstudosContext"


const ListaDeEstudos = () => {

    const {listaDeEstudos} = useListaDeEstudos()

    return (
        (listaDeEstudos.length > 0) ? <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {listaDeEstudos.map((estudo) => {
                    return (<Lista key={estudo.id} listaDeEstudos={estudo}/>)
                })} 
            </ul> 
        </aside> : <aside className={style.listaTarefas}><h2>Não há estudos</h2></aside>
    )
}

export default ListaDeEstudos