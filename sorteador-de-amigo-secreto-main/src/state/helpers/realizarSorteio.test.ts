import { realizarSorteio } from "./realizarSorteio"


describe('dado um sorteio de amigo secreto', () => {

    test('Cada participante não sorteie o próprio nome', () => {
        const participante = ['João', 'Lucas', 'Dorneles', 'João Lucas']

        const sorteio = realizarSorteio(participante)
        participante.forEach(participant => {
            const amigoSecreto = sorteio.get(participant)
            expect(amigoSecreto).not.toEqual(participant)
        })
    })

})