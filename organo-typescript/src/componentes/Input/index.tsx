import './Input.css'

interface InputProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    htmlFor: string
    id: string
    tipo: string
}

const Input = ({ aoAlterado, htmlFor, id, label, placeholder, tipo, valor, obrigatorio = false}: InputProps) => {


    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor={htmlFor}>{label}</label>
            <input value={valor} onChange={aoDigitar} required={obrigatorio} type={tipo} placeholder={`${placeholder}...`} id={id}/>
        </div>
    )
}

export default Input