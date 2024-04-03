import { takeLatest } from "redux-saga/effects";
import { carregarPagamento } from "../reducers/carrinho";


function* workerCarrinho(): Generator {
    yield console.log('Carregando pagamento');
    
}

export function* watcherCarrinho(): Generator {
    yield takeLatest(carregarPagamento, workerCarrinho)
}