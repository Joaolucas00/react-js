import { useState } from "react"
import { useListaDeEstudos } from "../../context/ListaDeEstudosContext"
import Botao from "../Botao"
import style from './style.module.scss'
import {v4 as uuIdv4} from 'uuid'
import { IListaDeEstudos } from "../../interfaces/IListaDeEstudos"

const Form = () => {

    const [novaAula, setNovaAula] = useState('')
    const [novoTempo, setNovoTempo] = useState('')

    const {listaDeEstudos, setListaDeEstudos} = useListaDeEstudos()

    const adicionarEstudo = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        const novoEstudo: IListaDeEstudos = {id: uuIdv4(), aula: novaAula, tempo: novoTempo, completado: false, selecionado: false}
        setListaDeEstudos([...listaDeEstudos, novoEstudo])
        setNovaAula('')
        setNovoTempo('00:00')
    }


    return (
        <form className={style.novaTarefa} onSubmit={adicionarEstudo}>
            <div className={style.inputContainer}>
                <label htmlFor="">Adicione um novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required onChange={(valor) => setNovaAula(valor.target.value)} value={novaAula}/>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required onChange={(valor) => setNovoTempo(valor.target.value)} value={novoTempo}/>
            </div>
            <Botao texto="Adicionar" />
        </form>
    )
}

export default Form