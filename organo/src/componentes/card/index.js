import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: props.corPrimaria}}>
                <img className='foto' src='https://github.com/Joaolucas00.png' alt='João Lucas'/>
            </div>
            <div className='rodape'>
                <h4>João</h4>
                <h5>Dev PHP</h5>
            </div>
        </div>
    )
}

export default Card