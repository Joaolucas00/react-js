import Home from "./index.tsx"
import { screen } from "@testing-library/react"
import { render } from "../../common/config/test-utils.js"

/*
function setup(jsx: any) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }
*/

vi.mock('../../services/categorias')

describe('Página Home', () => {

    test('Deve renderizar com 5 categorias', async () => {
        render(<Home/>)
        const categorias = await screen.findAllByTestId('home-categorias')
        expect(categorias).toHaveLength(5)
        
        categorias.forEach((categoria) => { expect(categoria).toBeInTheDocument()})
    })

})