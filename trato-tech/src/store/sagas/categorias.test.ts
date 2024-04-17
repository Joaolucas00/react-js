import { call, cancel, take } from "redux-saga/effects";
import { watcherCategorias, workerCategorias } from "./categorias"
import categoriasServices from "../../services/categorias";
import { adicionarCategorias } from "../reducers/categorias";
import { createMockTask } from '@redux-saga/testing-utils';


describe('Testando categorias saga', () => {

    describe('workers', () => {
        test('Deve executar categoriasService.buscar', () => {
            const funcaoGeradora = workerCategorias();
            const funcaoEsperada = call(categoriasServices.get)

            funcaoGeradora.next() // delay
            const funcaoExecutada = funcaoGeradora.next() // call
            
            expect(funcaoExecutada.value).toEqual(funcaoEsperada)
        })
    })

    describe('watchers', () => {
        test('Deve executar a tarefa corretamente', () => {
            const funcaoGeradora = watcherCategorias()
            funcaoGeradora.next()
            const funcaoEsperada = take(adicionarCategorias)
            expect(funcaoGeradora.next().value).toEqual(funcaoEsperada)

        })
        test('Deve executar a tarefa apenas uma vez', () => {
            const funcaoGeradora = watcherCategorias()
            const mockTask = createMockTask();
            funcaoGeradora.next(mockTask)
            const funcaoCancelarEsperada = cancel(mockTask.cancel() as any)
            funcaoGeradora.next()
            expect(funcaoGeradora.next().value).toEqual(funcaoCancelarEsperada)
        })
    })

})