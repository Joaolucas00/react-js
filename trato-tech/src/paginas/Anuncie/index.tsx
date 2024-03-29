import { useDispatch, useSelector } from "react-redux"
import Header from "../../componentes/Header"
import { RootState } from "../../store"
import styles from './Anuncie.module.scss'
import Botao from "../../componentes/Botao"
import { useForm } from "react-hook-form"
import { cadastrarProduto } from "../../store/reducers/produtos"

const Anuncie = () => {

    const categorias = useSelector((state: RootState) => state.categorias)    
    const dispatch = useDispatch()


    const {register, handleSubmit } = useForm({
        defaultValues: {
            titulo: '',
            categoria: '',
            descricao: '',
            foto: '',
            preco: 0
        }
    })

    const cadastrar = (data: any) => {
        dispatch(cadastrarProduto(data))
    }

    return (
        <div className={styles.container}>
            <Header titulo="Anuncie aqui!" descricao="Crie seus próprios anúncios customizados"/>
            <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
                <input {...register('titulo', { required: true })} placeholder="Nome do produto" alt="nomde do produto"/>
                <input {...register('descricao', { required: true })} placeholder="Descrição do produto" alt="Descrição do produto"/>
                <input {...register('foto',  { required: true })} placeholder="URL da imagem do produto" alt="URL da imagem do produto"/>
                <select {...register('categoria', { required: true })}>
                    <option value='' disabled >Selecione a categoria</option>
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                    ))}
                </select>
                <input {...register('preco', { required: true, valueAsNumber: true })} type="number" placeholder="Preço do produto"/>
                <Botao type="submit" onClick={() => {}}>Cadastrar produto</Botao>
            </form>
        </div>
    )
}

export default Anuncie