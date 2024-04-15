import { Provider } from "react-redux"
import Home from "./index.tsx"
import { render } from "@testing-library/react"
import store from "../../store/index.ts"


describe('Teste teste', () => {
    it('TEsteetee', () => {
        render(<Provider store={store}><Home/></Provider>)
    })
})