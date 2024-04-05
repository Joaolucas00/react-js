import { screen, render } from '@testing-library/react'
import Menu from '.'

test('Deve redentrizar um link para a página inicial', () => {
    render(<Menu/>)
    const linkParaPaginaInicial = screen.getByText('Inicial')
    expect(linkParaPaginaInicial).toBeInTheDocument()
})

test('Deve redentrizar uma lista de links', () => {
    render(<Menu/>)
    const listaDeLinks = screen.getAllByRole('link')
    expect(listaDeLinks).toHaveLength(4)
})

test('Não deve redenrizar para Extrato', () => {
    render(<Menu/>)
    const linkExtrato = screen.queryByText('Extrato')
    expect(linkExtrato).not.toBeInTheDocument()
})