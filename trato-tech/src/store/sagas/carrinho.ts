import { call, takeLatest } from "redux-saga/effects";
import { carregarPagamento } from "../reducers/carrinho";
import usuariosServices from "../../services/usuarios";
import cartoesServices from "../../services/cartoes";
import bandeirasServices from "../../services/bandeiras";

const usuarioLogado = 1

function* workerCarrinho(): Generator {
    try {
        const usuario: any = yield call(usuariosServices.getByID, usuarioLogado);
        const cartoesDoUsuario: any = yield call(cartoesServices.getByIdUsuarios, usuarioLogado);
        const bandeiraIds = cartoesDoUsuario.map((cartao: any) => cartao.bandeiraId);
        const bandeiras: any = yield call(bandeirasServices.get, bandeiraIds);
        const cartoesComBandeiras = cartoesDoUsuario.map((cartao: any) => { 
            const bandeiraDoCartao = bandeiras.find((bandeira: any) => bandeira.id == cartao.bandeiraId);
            return {...cartao, taxa: bandeiraDoCartao.taxa, bandeira: bandeiraDoCartao.nome};
        })
        console.log({ ...usuario, cartoes: cartoesComBandeiras});
        
    } catch (error) {
        console.log(error);
    }
    
}

export function* watcherCarrinho(): Generator {
    yield takeLatest(carregarPagamento, workerCarrinho)
}