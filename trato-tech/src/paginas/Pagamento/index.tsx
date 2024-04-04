import { useEffect, useState } from 'react'
import Botao from '../../componentes/Botao'
import Header from '../../componentes/Header'
import Select from '../../componentes/Select'
import styles from './Pagamento.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { carregarPagamento, finalizarPagamento } from '../../store/reducers/carrinho'
import { RootState } from '../../store'

const Pagamento = () => {

    const [formaDePagamento, setFormaDePagamento] = useState<string | any>('-')
    
    const usuario = useSelector((state: RootState) => state.usuario)
    const total = useSelector((state: RootState) => state.carrinho.total)
    
        const mudarFormaDePagamento = (evento: any) => {
            if(evento.target.value === '-') return setFormaDePagamento('-')
            setFormaDePagamento(usuario.cartoes.find((cartao: any) => cartao.id === evento.target.value))
        }
    console.log(usuario);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(carregarPagamento())
    }, [dispatch])
    console.log('Forma de pagamento:  ',formaDePagamento);
    
    const valorTotal = formaDePagamento === '-' ? total : total * formaDePagamento.taxa;

    const finalizar = () => {
        dispatch(finalizarPagamento({valorTotal, formaDePagamento}))
    }

    return (
        <div className={styles.container}>
            <Header descricao='Faça sua compra e seja feliz!' titulo='Pagamento'/>
            <div className={styles.dados}>
                <p className={styles.forma}>Olá {usuario.nome}! Escolha a forma de pagamento: </p>
                <Select value={formaDePagamento.id} onChange={mudarFormaDePagamento}>
                    <option value='-'>Forma de pagamento</option>
                    {usuario.cartoes?.map((cartao: any) => (
                        <option key={cartao.id} value={cartao.id}>{cartao.nome}</option>
                    ))}
                </Select>
                <div className={styles.content}>
                    {formaDePagamento !== '-' && (
                        <>
                            <p>A forma de pagamento {formaDePagamento.nome} tem taxa de {formaDePagamento.taxa}x</p>
                            <p>O saldo deste cartão é de R$ {formaDePagamento.saldo.toFixed(2)}</p>
                        </>
                    )}
                    <p>Total com taxas: R$ {valorTotal.toFixed(2)}</p>
                </div>
                <div className={styles.finalizar}>
                    <Botao disabled={valorTotal === 0 || formaDePagamento === '-'} onClick={finalizar}>Finalizar compra</Botao>
                </div>
            </div>
        </div>
    )
}

export default Pagamento