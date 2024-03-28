import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { IProdutos } from '../../interfaces/IProdutos'
import styles from './Produto.module.scss'

const iconeProps = {
    size: 24,
    color: '#041833'
}

interface ProdutoProps {
    produto: IProdutos
}

const Produto = ({ produto }: ProdutoProps) => {
    return (
        <div className={styles.item}>
            <div className={styles['item-imagem']}>
                <img src={produto.foto} alt={produto.titulo}/>
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{produto.titulo}</h2>
                    <p>{produto.descricao}</p>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R$ {produto.preco.toFixed(2)}
                    </div>
                    <div className={styles['item-acoes']}>
                        {produto.favorito 
                        ? <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']}/> 
                        : <AiOutlineHeart {...iconeProps} className={styles['item-acao']}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produto