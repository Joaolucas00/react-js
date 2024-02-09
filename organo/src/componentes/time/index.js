import { useState } from 'react'
import Card from '../card'
import './Time.css'

const Time = (props) => {

    const [corFundo , setMudarCorFundo] = useState(props.corSecundaria);
    const [corCard, setCorCard] = useState(props.corPrimaria)

    const mudarCor = (evento) => {
        setCorCard(evento)
        setMudarCorFundo(evento + '8F')
    }


    return (
        (props.cadastrados.length > 0) && <section className='time' style={{ backgroundColor: corFundo, backgroundImage: "url(imagens/fundo.png)" }}>
            <input value={"#000000"} type='color' className='input-cor' onChange={evento => mudarCor(evento.target.value)}/>
            <h3 style={{borderColor: props.corPrimaria}}>{props.titulo}</h3>
            <div className='cards-flex'>
                {props.cadastrados.map(colaborador => {
                    return <Card 
                        key={colaborador.nome} 
                        aoDeletar={props.aoDeletar} 
                        colaborador={colaborador} 
                        corPrimaria={corCard}
                    />
                    })}
            </div>
        </section>
        )
}

export default Time

