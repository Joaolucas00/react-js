import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

describe('Componente <App/>', () => {
    test('Deve permitir adicionar uma transação em extrato', () => {
        render(<App/>, {wrapper: BrowserRouter});

        const select = screen.getByRole('combobox')
        const campoValor = screen.getByPlaceholderText('Digite um valor')
        const botao = screen.getByRole('button')

        userEvent.selectOptions(select, ['Depósito'])
        userEvent.type(campoValor, '1111')
        userEvent.click(botao)

        const novaTransacao = screen.getByTestId('lista-transacoes')
        const itemExtrato = screen.getByRole('listitem')
        expect(novaTransacao).toContainElement(itemExtrato)
    })
})