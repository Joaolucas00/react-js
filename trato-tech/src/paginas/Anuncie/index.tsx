import { useSelector } from "react-redux"
import Header from "../../componentes/Header"
import { RootState } from "../../store"


const Anuncie = () => {

    const categorias = useSelector((state: RootState) => state.categorias)

    return (
        <div>
            <Header titulo="Anuncie aqui!" descricao="Crie seus próprios anúncios customizados"/>
            <form>
                <input placeholder="Nome do produto" alt="nomde do produto"/>
                <input placeholder="Descrição do produto" alt="Descrição do produto"/>
                <input placeholder="URL da imagem do produto" alt="URL da imagem do produto"/>
                <select>
                    <option value='' disabled >Selecione a categoria</option>
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                    ))}
                </select>
                <input type="number" placeholder="Preço do produto"/>
                <button type="submit">Cadastrar produto</button>
            </form>
        </div>
    )
}

export default Anuncie