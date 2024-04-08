import { renderHook, act,} from "@testing-library/react"
import { buscaSaldo } from "../services/saldo"
import useSaldo from "./useSaldo"

jest.mock('../services/saldo')

const mockSaldo = { valor: 2024}

describe('hooks/useSaldo.js', () => {
    test('Deve retornar um Array com saldo e uma função que muda saldo', async () => {
        buscaSaldo.mockImplementation(() => mockSaldo.valor)
        const { result } = renderHook(() => useSaldo())
        expect(result.current[0]).toEqual(0)

        await act(async () => {
            result.current[1]()
        })
        expect(result.current[0]).toEqual(mockSaldo.valor)
    })
})