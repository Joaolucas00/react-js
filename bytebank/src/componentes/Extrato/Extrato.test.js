import { render, screen} from '@testing-library/react'
import Extrato from '.'

test('Deve redenrizar um lista de transações', () => {
    const transacoes = [
        {
            transacao: 'Depósito',
            valor: 100,
        }
    ]
    render(<Extrato transacoes={transacoes}/>)
    const list = screen.getByRole('listitem')
    expect(list).toBeInTheDocument()
})