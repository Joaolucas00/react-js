import './Input.css'

interface InputProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
    for: string
    id: string
    tipo: string
}

const Input = (props: InputProps) => {


    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
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