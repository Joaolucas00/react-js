import './Card.css'
import { AiFillCloseCircle} from 'react-icons/ai'

const Card = ({ colaborador, corPrimaria, aoDeletar }) => {
    return (
        <div className='card'>
            <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar}/>
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