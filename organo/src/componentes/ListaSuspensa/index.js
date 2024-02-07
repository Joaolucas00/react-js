import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
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