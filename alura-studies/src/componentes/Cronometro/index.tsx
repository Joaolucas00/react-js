import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/date";
import Botao from "../Botao"
import Relogio from "./Relogio"
import style from './style.module.scss'
import { useListaDeEstudos } from "../../context/ListaDeEstudosContext";

const Cronometro = () => {   

    const {estudoSelecionado, setEstudoSelecionado, setListaDeEstudos} = useListaDeEstudos()
    
        const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if (estudoSelecionado) {
            setTempo(tempoParaSegundos(estudoSelecionado.tempo))
        }
    }, [estudoSelecionado])

    const finalizarTarefa = (): void => {
        if (estudoSelecionado) {
            setEstudoSelecionado(undefined)
            setListaDeEstudos(estudosAnteriores => estudosAnteriores.map(estudo => {
                if (estudo.id === estudoSelecionado.id) {
                    return {...estudo, selecionado: false, completado: true}
                }
                return estudo
            }))
        }
    }

    const regresiva = (contador: number = 0): void => {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1)
                return regresiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regresiva(tempo)} texto="Começar"/>
        </div>
    )
}

export default Cronometro