import { render, screen } from '@testing-library/react'
import Cabecalho from '.';

test("Deve redenrizar o nome do usuário logado", () => {
    render(<Cabecalho/>);
    const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
    expect(nomeUsuario).toBeInTheDocument();
})