import Home from "./index.tsx"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { render } from "../../common/config/test-utils.js"

/*
function setup(jsx: any) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }
*/


describe('Teste teste', () => {
    it('TEsteetee', () => {
        render(<Home/>)
        const categoriaTitulo = screen.getByText('Categorias')
        expect(categoriaTitulo).toBeInTheDocument()
    })

    test('UserEvent test', async () => {
        render(<Home/>)
        const input = screen.getByPlaceholderText('inputText')
        await userEvent.type(input, 'Olá, Mundo!')
        expect(input).toHaveAttribute('value', 'Olá, Mundo!')
    })
})