import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import styles from './Carrinho.module.scss'
import Header from "../../componentes/Header"
import { ICarrinho } from "../../interfaces/ICarrinho"
import Produto from "../../componentes/Produto"
import { IProdutos } from "../../interfaces/IProdutos"
import { resetarCarrinho } from "../../store/reducers/carrinho"

const Carrinho = () => {

    const dispatch = useDispatch()

    const { carrinho, total }= useSelector((state: RootState) => {
        let total = 0;
        const regexp = new RegExp(state.busca, 'i')
        const carrinhoReduce = state.carrinho.reduce((itens: ICarrinho[], itemNoCarrinho) => {
            const item = state.produtos.find(item => item.id === itemNoCarrinho.id) as IProdutos
            total += (item.preco * itemNoCarrinho.quantidade)
            if(item.titulo.match(regexp)) {
                itens.push({...item, id: itemNoCarrinho.id, quantidade: itemNoCarrinho.quantidade})
            }
            return itens
        }, [])
        
        return {
            carrinho: carrinhoReduce,
            total
        }
    })
    const produtos = useSelector((state: RootState) => state.produtos)

    return (
        <div>
            <Header titulo="Carrinho de Compras" descricao="Confira produtos que você adicionou ao carrinho"/>
            <div className={styles.carrinho}>
                {carrinho.map(produtoNocarrinho => <Produto carrinho produto={produtos.find((produto) => produto.id === produtoNocarrinho.id) as IProdutos}/>)}
                <div className={styles.total}>
                    <strong>resumo da compra</strong>
                    <span>Subtotal: <strong> R$ {total.toFixed(2)}</strong></span>
                </div>
            </div>
            <button className={styles.finalizar} onClick={() => dispatch(resetarCarrinho())}>
                Finalizar compra
            </button>
        </div>
    )
}

export default Carrinho