import { screen } from "@testing-library/react"
import Produto from "."
import { render } from "../../common/config/test-utils"
import { mockProdutos } from "../../services/__mocks__/produtos"
import userEvent from "@testing-library/user-event"
import { deletarProduto, mudarFavorito, mudarProduto } from "../../store/reducers/produtos"

const mockDispatch = vi.fn()
vi.mock('react-redux', async () => {
    const reactRedux = await vi.importActual('react-redux')
    return {
        ...reactRedux,
        useDispatch: () => mockDispatch
    }
})

describe('Componenete produto', () => {

    afterEach(() => {
        vi.clearAllMocks()
    })

    test('Deve ser possível apagar um produto. action: produtos/deletarProduto', async () => {
        render(<Produto produto={mockProdutos[0]}/>)
        const close = screen.getByTestId('close')
        await userEvent.click(close)
        const expectedAction = deletarProduto("1")
        expect(mockDispatch).toHaveBeenCalled()
        expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })

    test('Deve ser possível editar um produto. action: produtos/mudarProduto', async () => {
        render(<Produto produto={mockProdutos[0]}/>)
        const fillEdit = screen.getByTestId('fillEdit')
        await userEvent.click(fillEdit)
        const inputText = screen.getByTestId('input-text')
        await userEvent.clear(inputText)
        await userEvent.type(inputText, 'Teste')
        const outLineCheck = screen.getByTestId('outLineCheck')
        await userEvent.click(outLineCheck)
        const expectedAction = mudarProduto({id: "1", produto: {titulo: "Teste"}})
        expect(mockDispatch).toHaveBeenCalled()
        expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })

    test('Deve ser possível favoritar', async () => {
        render(<Produto produto={mockProdutos[0]}/>)
        const outLineHeart = screen.getByTestId('outLineHeart')
        await userEvent.click(outLineHeart)
        const expectedAction = mudarFavorito("1")
        expect(mockDispatch).toHaveBeenCalled()
        expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })

})