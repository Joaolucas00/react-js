import { useSelector } from "react-redux"
import Header from "../../componentes/Header"
import { RootState } from "../../store"
import { useParams } from "react-router-dom"
import { ICategorias } from "../../interfaces/ICategorias"
import styles from './Categoria.module.scss'
import Produto from "../../componentes/Produto"

const Categoria = () => {
    const { nomeCategoria } = useParams()
    const { categoria, produtos } = useSelector((state: RootState) =>({ 
        categoria: state.categorias.find(categoria => categoria.id === nomeCategoria) as ICategorias,
        produtos: state.produtos.filter(produto => produto.categoria === nomeCategoria)
    })) 
    return (
        <div>
           <Header titulo={categoria.nome} imagem={categoria.header} descricao={categoria.descricao}/>
           <div className={styles.itens}>
                {produtos.map(produto => (
                    <Produto key={produto.id} produto={produto}/>
                ))}
           </div>
        </div>
    )


}

export default Categoria