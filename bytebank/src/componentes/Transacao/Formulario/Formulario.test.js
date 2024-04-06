import { render, screen } from '@testing-library/react'
import  userEvent from '@testing-library/user-event'
import Formulario from '.'

describe('Deve redenrizar um campo de input', () => {

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


