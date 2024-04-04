import { useEffect } from 'react'
import Botao from '../../componentes/Botao'
import Header from '../../componentes/Header'
import Select from '../../componentes/Select'
import styles from './Pagamento.module.scss'
import { useDispatch } from 'react-redux'
import { carregarPagamento } from '../../store/reducers/carrinho'

const Pagamento = () => {

    
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(carregarPagamento())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <Header descricao='Faça sua compra e seja feliz!' titulo='Pagamento'/>
            <div className={styles.dados}>
                <p className={styles.forma}>Olá usuário! Escolha a forma de pagamento: </p>
                <Select>
                    <option value='-'>Forma de pagamento</option>
                </Select>
                <div className={styles.content}>
                    <p>Total com taxas: R$ 0.00</p>
                </div>
                <div className={styles.finalizar}>
                    <Botao>Finalizar compra</Botao>
                </div>
            </div>
        </div>
    )
}

export default Pagamento