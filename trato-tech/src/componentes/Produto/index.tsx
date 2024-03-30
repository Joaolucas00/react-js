import { AiFillCloseCircle, AiFillEdit, AiFillHeart, AiFillMinusCircle, AiFillPlusCircle, AiOutlineCheck, AiOutlineHeart } from 'react-icons/ai'
import { IProdutos } from '../../interfaces/IProdutos'
import styles from './Produto.module.scss'
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deletarProduto, mudarFavorito, mudarProduto } from '../../store/reducers/produtos'
import { mudarCarrinho, mudarQuantidade } from '../../store/reducers/carrinho'
import { RootState } from '../../store'
import { ICarrinho } from '../../interfaces/ICarrinho'
import { useState } from 'react'
import Input from '../Input'
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
    
    const [modoDeEdicao, setModoDeEdicao] = useState(false)
    const [novoTitulo, setNovoTitulo] = useState(produto.titulo)

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

    const componenteModoDeEdicao = <>
            { modoDeEdicao 
               ? <AiOutlineCheck {...iconeProps} className={styles['item-acao']} onClick={() => {
                setModoDeEdicao(false);
                dispatch(mudarProduto({id: produto.id, produto: {titulo: novoTitulo}}))
               }}/>
                : <AiFillEdit {...iconeProps} className={styles['item-acao']} onClick={() => setModoDeEdicao(true)}/>
            }
    </>

    return (
        <div className={`${styles.item} ${carrinho ? styles.itemNoCarrinho : ''}`}>
            <AiFillCloseCircle onClick={() => dispatch(deletarProduto(produto.id))} {...iconeProps} className={`${styles['item-acao']} ${styles['item-deletar']}`}/>
            <div className={styles['item-imagem']}>
                <img src={produto.foto} alt={produto.titulo}/>
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    {modoDeEdicao ? <Input value={novoTitulo} onChange={e => setNovoTitulo(e.target.value)}/> : <h2>{produto.titulo}</h2>}
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
                        <>
                        <FaCartPlus {...iconeProps} color={estaNoCarrinho ? '#1875E8' : iconeProps.color} className={styles['item-acao']} onClick={alterarCarrinho}/>
                            {componenteModoDeEdicao}
                        </>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produto