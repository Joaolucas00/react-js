import Card from '../card'
import './Time.css'

const Time = (props) => {
    return (
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.titulo}</h3>
            <div className='cards-flex'>
                <Card corPrimaria={props.corPrimaria}/>
                <Card corPrimaria={props.corPrimaria}/>
                <Card corPrimaria={props.corPrimaria}/>
                <Card corPrimaria={props.corPrimaria}/>
                <Card corPrimaria={props.corPrimaria}/>
                <Card corPrimaria={props.corPrimaria}/>
                <Card corPrimaria={props.corPrimaria}/>
                <Card corPrimaria={props.corPrimaria}/>
            </div>
        </section>)
}

export default Time