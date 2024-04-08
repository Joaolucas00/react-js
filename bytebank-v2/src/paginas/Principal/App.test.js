import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../../routes'

// testes de integrações com outros componentes
describe('Componente <App/>', () => {
    test('Deve permitir adicionar uma transação em extrato', () => {
        render(<App/>, {wrapper: BrowserRouter});

        const select = screen.getByRole('combobox');
        const campoValor = screen.getByPlaceholderText('Digite um valor');
        const botao = screen.getByRole('button');

        userEvent.selectOptions(select, ['Depósito']);
        userEvent.type(campoValor, '1111');
        userEvent.click(botao);

        const novaTransacao = screen.getByTestId('lista-transacoes');
        const itemExtrato = screen.getByRole('listitem');
        expect(novaTransacao).toContainElement(itemExtrato);
    });

    test('Deve navegar até a página correspondente ao link clicado', async () => {
        render(<AppRoutes/>, {wrapper: BrowserRouter});

        const linkPaginaCartoes = screen.getByText('Cartões');
        expect(linkPaginaCartoes).toBeInTheDocument();

        userEvent.click(linkPaginaCartoes);

        const tituloPaginaCartoes = await screen.findByText('Meus cartões');
        expect(tituloPaginaCartoes).toBeInTheDocument();
    });

    test('Deve navegar até a página de investimentos', async () => {
        render(<AppRoutes/>, {wrapper: BrowserRouter})
        const linkInvestimentos = screen.getByText('Investimentos')
        expect(linkInvestimentos).toBeInTheDocument()

        userEvent.click(linkInvestimentos)

        const titulo = await screen.findByText('Renda Fixa')
        
        expect(titulo).toBeInTheDocument()
    })
})