import { screen, render } from '@testing-library/react';
import Menu from '.';

test('Deve renderizar um link para a página inicial', () => {
    render(<Menu/>);
    const linkParaPaginaInicial = screen.getByText('Inicial');
    expect(linkParaPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de links', () => {
    render(<Menu/>);
    const listaDeLinks = screen.getAllByRole('link');
    expect(listaDeLinks).toHaveLength(4);
});

test('Não deve renderizar para Extrato', () => {
    render(<Menu/>);
    const linkExtrato = screen.queryByText('Extrato');
    expect(linkExtrato).not.toBeInTheDocument();
});

test('Deve renderizar uma lista de links com a classe link', () => {
    render(<Menu/>);
    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot();
});