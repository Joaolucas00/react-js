import { useState } from 'react'
import './Time.css'
import { ICadastrados } from '../../interfaces/ICadastrados'
import Card from '../card'

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    cadastrados: Array<ICadastrados>
    titulo: string
    aoDeletar: (id: string) => void
    aoFavoritar: (pessoa: ICadastrados) => void
}

const Time = (props: TimeProps) => {

    const [corFundo , setMudarCorFundo] = useState(props.corSecundaria);
    const [corCard, setCorCard] = useState(props.corPrimaria)

    const mudarCor = (evento: string): void => {
        setCorCard(evento)
        setMudarCorFundo(evento + '8F')
    }


    return (
        (props.cadastrados.length > 0) && <section className='time' style={{ backgroundColor: corFundo, backgroundImage: "url(imagens/fundo.png)" }}>
            <input value={corCard} type='color' className='input-cor' onChange={evento => mudarCor(evento.target.value)}/>
            <h3 style={{borderColor: props.corPrimaria}}>{props.titulo}</h3>
            <div className='cards-flex'>
                {props.cadastrados.map(colaborador => {
                    return <Card 
                        key={colaborador.id} 
                        aoDeletar={props.aoDeletar} 
                        colaborador={colaborador} 
                        corPrimaria={corCard}
                        aoFavoritar={props.aoFavoritar}
                    />
                    })}
            </div>
        </section>
        )
}

export default Time

