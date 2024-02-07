import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
    return (
        <div className="campo-texto lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa