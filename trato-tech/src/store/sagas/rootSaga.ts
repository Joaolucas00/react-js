import { all } from "redux-saga/effects";
import { watcherCarrinho } from "./carrinho";
import { watcherCategorias } from "./categorias";


export default function* rootSaga() {
    yield all([
        watcherCarrinho(),
        watcherCategorias(),
    ])
}