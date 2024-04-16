import { Provider } from "react-redux"
import Home from "./index.tsx"
import { render, screen } from "@testing-library/react"
import store from "../../store/index.ts"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

/*
function setup(jsx: any) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }
  */


describe('Teste teste', async () => {
    it('TEsteetee', () => {
        render(<Provider store={store}><BrowserRouter><Home/></BrowserRouter></Provider>)
        const categoriaTitulo = screen.getByText('Categorias')
        expect(categoriaTitulo).toBeInTheDocument()
    })

    test('UserEvent test', async () => {
        render(<Provider store={store}><BrowserRouter><Home/></BrowserRouter></Provider>)
        const input = screen.getByPlaceholderText('inputText')
        await userEvent.type(input, 'Olá, Mundo!')
        expect(input).toHaveAttribute('value', 'Olá, Mundo!')
    })
})