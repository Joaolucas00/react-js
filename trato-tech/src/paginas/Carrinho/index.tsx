import { useSelector } from "react-redux"
import { RootState } from "../../store"
import styles from './Carrinho.module.scss'
import Header from "../../componentes/Header"
import { ICarrinho } from "../../interfaces/ICarrinho"
import Produto from "../../componentes/Produto"
import { IProdutos } from "../../interfaces/IProdutos"

const Carrinho = () => {

    const carrinho = useSelector((state: RootState) => {
        const carrinhoReduce = state.carrinho.reduce((itens: ICarrinho[], itemNoCarrinho) => {
            const item = state.produtos.find(item => item.id === itemNoCarrinho.id)
            itens.push({...item, id: itemNoCarrinho.id, quantidade: itemNoCarrinho.quantidade})
            return itens
        }, [])
        console.log("Log dessa merda: ", carrinhoReduce);
        
        return carrinhoReduce
    })
    const produtos = useSelector((state: RootState) => state.produtos)

    return (
        <div>
            <Header titulo="Carrinho de Compras" descricao="Confira produtos que você adicionou ao carrinho"/>
            <div className={styles.carrinho}>
                {carrinho.map(produtoNocarrinho => <Produto produto={produtos.find((produto) => produto.id === produtoNocarrinho.id) as IProdutos}/>)}
                <div className={styles.total}>
                    <strong>resumo da compra</strong>
                    <span>Subtotal: <strong> R$ {0.0.toFixed(2)}</strong></span>
                </div>
            </div>
        </div>
    )
}

export default Carrinho