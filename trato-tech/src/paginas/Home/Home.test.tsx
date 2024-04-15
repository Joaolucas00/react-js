import { Provider } from "react-redux"
import Home from "./index.tsx"
import { render, screen } from "@testing-library/react"
import store from "../../store/index.ts"
import { BrowserRouter } from "react-router-dom"


describe('Teste teste', () => {
    it('TEsteetee', () => {
        render(<Provider store={store}><BrowserRouter><Home/></BrowserRouter></Provider>)
        const categoriaTitulo = screen.getByText('Categorias')
        expect(categoriaTitulo).toBeInTheDocument()
    })
})