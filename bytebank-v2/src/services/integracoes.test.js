import api from './api'
import { atualizaSaldo, buscaSaldo } from './saldo'
import { buscaTransacoes, salvaTransacao } from './transacoes'

jest.mock('./api')

const mockSaldo = { valor: 1111 }

const mockRequisicaoPut = () => {
    return new Promise((resolve) => { resolve({ status: 200}) })
}

const mockTransacao = [{
    id: 1,
    transacao: 'Depósito',
    valor: '100',
    data: '22/11/2022',
    mes: 'Novembro'
}]

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno
            })
        }, 200)
    })
}

const mockRequisicaoSaldo = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve({data: retorno}) }, 200)
    })
}

const mockRequisicaoErro = () => {
    return new Promise((_, reject) => {
        setTimeout(() => { reject() }, 200)
    })
}

const mockRequisicaoPost = () => {
    return new Promise((resolve) => { resolve({ status: 201}) }, 200)
}

beforeEach(() => {
    api.get.mockClear();
})

describe('Requisições para API', () => {
    test('Deve retornar uma lista de transações', async () => {
        api.get.mockImplementation(() => mockRequisicao(mockTransacao))
        const transacoes = await buscaTransacoes();
        expect(transacoes).toEqual(mockTransacao);
        expect(api.get).toHaveBeenCalledWith('/transacoes');
    })

    test('Deve retornar uma lista vazia quando a requisição falhar', async () => {
        api.get.mockImplementation(() => mockRequisicaoErro());

        const transacoes = await buscaTransacoes();

        expect(transacoes).toEqual([]);
        expect(api.get).toHaveBeenCalledWith('/transacoes');
    })

    test('Deve retornar um status 201 após uma requisição POST', async () => {
        api.post.mockImplementation(() => mockRequisicaoPost())
        const status = await salvaTransacao(mockTransacao[0])
        expect(status).toBe(201)
        expect(api.post).toHaveBeenCalledWith('/transacoes', mockTransacao[0])
    })

    test('Deve retornar o saldo', async () => {
        api.get.mockImplementation(() => mockRequisicaoSaldo(mockSaldo))
        const valor = await buscaSaldo()
        expect(valor).toEqual(mockSaldo.valor)
        expect(api.get).toHaveBeenCalledWith('/saldo')
    })
  
    test('Deve realizar uma requisição PUT na URL /saldo', async () => {
        api.put.mockImplementation(() => mockRequisicaoPut())
        await atualizaSaldo(100)
        expect(api.put).toHaveBeenCalledWith('/saldo', {valor: 100})
    })
})