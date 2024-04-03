import { takeEvery } from "redux-saga/effects"
import { adicionarCategorias } from "../reducers/categorias"

function* observerCategorias() {
    yield console.log('Observando... ')
}

export function* sagaCategorias() {
    yield takeEvery(adicionarCategorias, observerCategorias)
}