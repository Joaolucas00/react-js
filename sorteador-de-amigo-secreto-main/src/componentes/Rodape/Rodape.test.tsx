import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "."
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"

jest.mock('../../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
    const reactRouter = jest.requireActual('react-router-dom')
    return {
        ...reactRouter,
        useNavigate: () => mockNavigate
    }
})

describe('Quando não existem participantes suficientes', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })


    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot><Rodape/></RecoilRoot>)
        
        const botao = screen.getByRole('button')
        
        expect(botao).toBeDisabled()

    })

})

describe('Quando existem participantes suficientes', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['João', 'Lucas', 'Dorneles'])
    })

    test('a brincadeira pode ser iniciada', () => {
        render(<RecoilRoot><Rodape/></RecoilRoot>)
        
        const botao = screen.getByRole('button')
        
        expect(botao).not.toBeDisabled()
    })

    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot><Rodape/></RecoilRoot>)
        
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        
        expect(mockNavigate).toHaveBeenCalled()
        expect(mockNavigate).toBeCalledWith('/sorteio')
    })

})