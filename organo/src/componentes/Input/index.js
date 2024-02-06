import './Input.css'

const Input = (props) => {
    return (
        <div className="campo-texto">
            <label for={props.for}>{props.label}</label>
            <input type="text" placeholder={`${props.placeholder}...`} id={props.id}/>
        </div>
    )
}

export default Input