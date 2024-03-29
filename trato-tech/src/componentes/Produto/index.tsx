import { AiFillHeart, AiFillMinusCircle, AiFillPlusCircle, AiOutlineHeart } from 'react-icons/ai'
import { IProdutos } from '../../interfaces/IProdutos'
import styles from './Produto.module.scss'
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { mudarFavorito } from '../../store/reducers/produtos'
import { mudarCarrinho, mudarQuantidade } from '../../store/reducers/carrinho'
import { RootState } from '../../store'
import { ICarrinho } from '../../interfaces/ICarrinho'
// import { AppDispatch } from '../../store'

const iconeProps = {
    size: 24,
    color: '#041833'
}

const qunatidadeProps = {
    size: 32,
    color: '#1875E8'
}

interface ProdutoProps {
    produto: IProdutos,
    carrinho?: boolean
}

const Produto = ({ produto, carrinho }: ProdutoProps) => {

    const estaNoCarrinho = useSelector((state: RootState) => state.carrinho.some(produtoNoCarrinho => produtoNoCarrinho.id === produto.id))

    const noCarrinho = useSelector((state: RootState) => state.carrinho)

    const carrinhoAtual = noCarrinho.find(car => car.id === produto.id) as ICarrinho

    const dispatch = useDispatch()

    const alterarFavorito = () => {
        dispatch(mudarFavorito(produto.id))
    }

    const alterarCarrinho = () => {
        dispatch(mudarCarrinho(produto.id))
    }

    return (
        <div className={`${styles.item} ${carrinho ? styles.itemNoCarrinho : ''}`}>
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
                        ? <AiFillHeart onClick={alterarFavorito} {...iconeProps} color='#ff0000' className={styles['item-acao']}/> 
                        : <AiOutlineHeart onClick={alterarFavorito} {...iconeProps} className={styles['item-acao']}/>}
                        { carrinho ? 
                        (
                            <div className={styles.quantidade}>
                                Quantidade: <AiFillMinusCircle onClick={() => {
                                    if(carrinhoAtual.quantidade >= 1) {
                                        dispatch(mudarQuantidade({id: produto.id, quantidade: -1}))
                                    } else if (carrinhoAtual.quantidade == 0) {alterarCarrinho()}
                                    } 
                                } {...qunatidadeProps}/>
                                <span>{String(carrinhoAtual?.quantidade || 0).padStart(2, '0')}</span>
                                <AiFillPlusCircle {...qunatidadeProps} onClick={() => dispatch(mudarQuantidade({id: produto.id, quantidade: +1}))}/>
                            </div>
                        )
                        : (
                        <FaCartPlus {...iconeProps} color={estaNoCarrinho ? '#1875E8' : iconeProps.color} className={styles['item-acao']} onClick={alterarCarrinho}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produto