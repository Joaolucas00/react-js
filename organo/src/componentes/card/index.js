import './Card.css'

const Card = ({ colaborador, corPrimaria }) => {
    return (
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
                <img className='foto' src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Card