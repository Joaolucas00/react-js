import { useSelector } from "react-redux"
import Header from "../../componentes/Header"
import { RootState } from "../../store"
import { useParams } from "react-router-dom"
import { ICategorias } from "../../interfaces/ICategorias"


const Categoria = () => {
    const { nomeCategoria } = useParams()
    const categoria = useSelector((state: RootState) => state.categorias.find(categoria => categoria.id === nomeCategoria)) as ICategorias
    return (
        <div>
            <Header titulo={categoria.nome} imagem={categoria.header} descricao={categoria.descricao}/>
        </div>
        )

}

export default Categoria