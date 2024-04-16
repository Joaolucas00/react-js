import Home from "./index.tsx"
import { screen } from "@testing-library/react"
import { render } from "../../common/config/test-utils.js"
import userEvent from '@testing-library/user-event'

/*
function setup(jsx: any) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }
*/

vi.mock('../../services/categorias')
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
    const module = await vi.importActual('react-router-dom')
    return {
        ...module,
        useNavigate: () => mockNavigate
    }
})

describe('Página Home', () => {

    describe('Anuncie', () => {
        test('Deve redirecionar para a página anuncie', async () => {
            render(<Home/>)
            const botaoAnuncie = screen.getByTestId('home-botao-anunciar')
            expect(botaoAnuncie).toBeInTheDocument()
            await userEvent.click(botaoAnuncie)
            expect(mockNavigate).toHaveBeenCalledWith('/anuncie')
        })
    })

    describe('Categorias', () => {
        test('Deve renderizar com 5 categorias', async () => {
            render(<Home/>)
            const categorias = await screen.findAllByTestId('home-categorias')
            expect(categorias).toHaveLength(5)
            categorias.forEach((categoria) => { expect(categoria).toBeInTheDocument()})
        })
    })


})