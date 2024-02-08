import Card from '../card'
import './Time.css'

const Time = (props) => {
    return (
        (props.cadastrados.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.titulo}</h3>
            <div className='cards-flex'>
                {props.cadastrados.map(colaborador => <Card colaborador={colaborador} corPrimaria={props.corPrimaria}/>)}
            </div>
        </section>
         : ''
        )
}

export default Time