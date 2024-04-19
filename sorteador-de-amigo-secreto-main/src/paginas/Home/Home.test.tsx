import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Home from "."

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
    const reactRouter = jest.requireActual('react-router-dom')
    return {
        ...reactRouter,
        useNavigate: () => mockNavigate
    }
})

describe('A pagina de configuracao', () => {

    test('Deve ser renderizada corretamente', () => {
        const { container } = render(<RecoilRoot><Home/></RecoilRoot>)
        
        expect(container).toMatchSnapshot()
    })

})