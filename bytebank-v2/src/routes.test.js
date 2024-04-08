import { render, screen } from '@testing-library/react';
import App from './paginas/Principal/App';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import Cartoes from './componentes/Cartoes';
import AppRoutes from './routes';

describe('Rotas da aplicação', () => {
    test('Deve renderizar a rota principal', () => {
        render(<App/>, { wrapper: BrowserRouter });
        const usuario = screen.getByText('Olá, Joana :)!');
        expect(usuario).toBeInTheDocument();
    });

    test('Deve renderizar a rota Cartões', () => {
        const rota = '/cartoes';
        render(<MemoryRouter initialEntries={[rota]}>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='cartoes' element={<Cartoes/>}/>
                </Route>
            </Routes>
        </MemoryRouter>);
        const meusCartoes = screen.getByText('Meus cartões');
        expect(meusCartoes).toHaveTextContent('Meus cartões');
    })

    // testando o useLocation
    test('Deve renderizar a localização da rota atual', () => {
        const rota = '/';
        render(<MemoryRouter initialEntries={[rota]}>
            <App/>
        </MemoryRouter>);
        const localizacaoAtual = screen.getByTestId('local');
        expect(localizacaoAtual).toHaveTextContent(rota);
    });

    test('Deve renderizar rotas serviços', () => {
        const rota = '/servicos'
        render(<MemoryRouter initialEntries={[rota]}>
            <AppRoutes/>
        </MemoryRouter>)
        const texto = screen.getByText('Empréstimo')
        expect(texto).toBeInTheDocument()
    })

    test('Deve renderizar a página 404', () => {
        const rota = '/pagina_nao_existente';
        render(<MemoryRouter initialEntries={[rota]}>
            <AppRoutes/>
        </MemoryRouter>);
        const paginaErro = screen.getByTestId('pagina-404');
        expect(paginaErro).toContainHTML('<h1>Ops! Não encontramos a página</h1>');
    })
})