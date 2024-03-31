import { useSelector } from "react-redux"
import Header from "../../componentes/Header"
import { RootState } from "../../store"
import { useNavigate, useParams } from "react-router-dom"
import { ICategorias } from "../../interfaces/ICategorias"
import styles from './Categoria.module.scss'
import Produto from "../../componentes/Produto"
import Botao from "../../componentes/Botao"

const Categoria = () => {
    const navigate = useNavigate()
    const { nomeCategoria } = useParams()
    const { categoria, produtos } = useSelector((state: RootState) => { 
        const regexp = new RegExp(state.busca, 'i')
        return {
        categoria: state.categorias.find(categoria => categoria.id === nomeCategoria) as ICategorias || {},
        produtos: state.produtos.filter(produto => produto.categoria === nomeCategoria && produto.titulo.match(regexp))
        }
    }) 
    return (
        <div>
           <Header titulo={categoria.nome} imagem={categoria.header} descricao={categoria.descricao}>
                <Botao onClick={() => navigate(`/anuncie/${categoria.id}`)}>Quero anunciar</Botao>
           </Header>
           <div className={styles.itens}>
                {produtos.map(produto => (
                    <Produto key={produto.id} produto={produto}/>
                ))}
           </div>
        </div>
    )


}

export default Categoria