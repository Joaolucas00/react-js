import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipante from "."
import { useListaParticipantes } from "../../state/hook/useListaParticipantes"

jest.mock('../../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

describe('ListaParticipante vazia', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })
    
    test('Deve renderizar uma lista vazia de participantes', () => {
        render(<RecoilRoot><ListaParticipante/></RecoilRoot>)
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })

}) 

describe('ListaParticipantes preenchida', () => {
    
    const participantes = ['João', 'Lucas']

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('Deve renderizar uma lista preenchida de participantes', () => {
        render(<RecoilRoot><ListaParticipante/></RecoilRoot>)
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })

})
