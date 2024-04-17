import { call } from "redux-saga/effects";
import { workerCategorias } from "./categorias"
import categoriasServices from "../../services/categorias";


describe('Testando categorias saga', () => {

    describe('workers', () => {
        test('Deve executar categoriasService.buscar', () => {
            const funcaoGeradora = workerCategorias();
            const funcaoEsperada = call(categoriasServices.get)

            funcaoGeradora.next() // delay
            const funcaoExecutada = funcaoGeradora.next()
            
            expect(funcaoExecutada.value).toEqual(funcaoEsperada)
        })
    })

})