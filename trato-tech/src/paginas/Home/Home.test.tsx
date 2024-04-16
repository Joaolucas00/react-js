import Home from "./index.tsx"
import { screen } from "@testing-library/react"
import { render } from "../../common/config/test-utils.js"
import userEvent from '@testing-library/user-event'
import { mockCategorias } from "../../services/__mocks__/categorias.ts"

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
    const reactRouter = await vi.importActual('react-router-dom')
    return {
        ...reactRouter,
        useNavigate: () => mockNavigate
    }
})

describe('Página Home', () => {

    afterEach(() => {
        vi.clearAllMocks()
    })

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

        test('Deve renderizar página Home com 5 categorias', async () => {
            render(<Home/>)
            const categorias = await screen.findAllByTestId('home-categorias')
            expect(categorias).toHaveLength(5)
            categorias.forEach((categoria) => { expect(categoria).toBeInTheDocument()})
        })

        test('Deve redirecionar para o id da categoria', async () => {
            render(<Home/>)
            const categorias = await screen.findAllByTestId('home-categorias')
            categorias.forEach((categoria) => {expect(categoria).toBeInTheDocument()})
            await userEvent.click(categorias[0])
            expect(mockNavigate).toHaveBeenCalled()
            expect(mockNavigate).toHaveBeenCalledWith(`/categoria/${mockCategorias[0].id}`)
        })

    })


})