import { render, screen } from '@testing-library/react'
import  userEvent from '@testing-library/user-event'
import Formulario from '.'

describe('Deve renderizar um campo de input', () => {
    
    test('no documento', () => {
        render(<Formulario/>)
        const inputText = screen.getByPlaceholderText('Digite um valor')
        expect(inputText).toBeInTheDocument();
    })
    
    test('com type number', () => {
        render(<Formulario/>)
        const inputText = screen.getByPlaceholderText('Digite um valor')
        expect(inputText).toHaveAttribute('type', 'number')
    })
    
    test('que pode ser preenchido', () => {
        render(<Formulario/>)
        const inputText = screen.getByPlaceholderText('Digite um valor')
        userEvent.type(inputText, '50')
        expect(inputText).toHaveValue(50)
    })
})    

test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
    const realizarTransacao = jest.fn()
    render(<Formulario realizarTransacao={realizarTransacao}/>)
    const botao = screen.getByRole('button')

    userEvent.click(botao)
    expect(realizarTransacao).toHaveBeenCalledTimes(1)
})

test('Deve ser possível selecionar uma opção do elemento select', () => {
    render(<Formulario/>)
    const select = screen.getByRole('combobox')
    const optionPadrao = screen.getByRole('option', {name: 'Selecione um tipo de transação'})
    const optionDeposito = screen.getByRole('option', {name: 'Depósito'})
    userEvent.selectOptions(select, ['Depósito'])
    expect(optionPadrao.selected).toBe(false)
    expect(optionDeposito.selected).toBe(true)
})