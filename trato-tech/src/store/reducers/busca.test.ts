import buscaReducer, { mudarBusca, resetarBusca } from './busca'

describe('Testando busca reducer', () => {

    test('Deve mudar busca como esperado', () => {
        expect(buscaReducer('', mudarBusca('teste'))).toEqual('teste')
    })

    test('Deve resetar busca como o esperado', () => {
        expect(buscaReducer('teste', resetarBusca())).toEqual('')
    })

})