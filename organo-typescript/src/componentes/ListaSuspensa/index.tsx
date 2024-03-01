import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void 
    label: string
    obrigatorio: boolean
    value: string
    itens: Array<string>
}



const ListaSuspensa = (props: ListaSuspensaProps) => {
    return (
        <div className="campo-texto lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} onChange={evento => props.aoAlterado(evento.target.value)} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa