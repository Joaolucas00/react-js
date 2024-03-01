import { ICadastrados } from '../../interfaces/ICadastrados'
import './Card.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

interface CardProps {
    colaborador: ICadastrados
    corPrimaria: string
    aoDeletar: (id: string) => void
    aoFavoritar: (pessoa: any) => void
}


const Card = ({ colaborador, corPrimaria, aoDeletar, aoFavoritar}: CardProps) => {

    const propsfavorito = {
        size: 25,
        onClick: () => aoFavoritar(colaborador),
    }

    return (
        <div className='card'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}  
            />
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
                <img className='foto' src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favorito'>
                    {colaborador.favorito 
                        ? <AiFillHeart color="#FF0000" {...propsfavorito }/> 
                        : <AiOutlineHeart {...propsfavorito }/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card