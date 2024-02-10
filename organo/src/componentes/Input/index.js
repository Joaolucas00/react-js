import './Input.css'

const Input = (props) => {


    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor={props.for}>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} type={props.tipo} placeholder={`${props.placeholder}...`} id={props.id}/>
        </div>
    )
}

export default Input