import { calculaNovoSaldo } from '.'

describe('Quando realizar transação', () => {
    test('que é um depósito, o saldo deve aumentar', () => {
        const transacao = {
            transacao: 'Depósito',
            valor: 50
        }

        const novoSaldo = calculaNovoSaldo(transacao, 100)
        
        expect(novoSaldo).toBe(150)
    })

    test('que é uma transferência, o saldo deve diminuir', () => {
        const transacao = {
            transacao: 'Transfência',
            valor: 50
        }

        const novoSaldo = calculaNovoSaldo(transacao, 100)
        
        expect(novoSaldo).toBe(50)
    })

})

test('Deve retornar um valor do saldo atualizado com o rendimento', () => {
    const calcularRendimento = jest.fn(saldo => saldo + saldo*0.005);
    const saldo = 100;
    const novoSaldo = calcularRendimento(saldo)
    
    expect(novoSaldo).toBe(100.5);
    expect(calcularRendimento).toBeCalled()
    expect(calcularRendimento).toHaveBeenCalledWith(saldo)
});

