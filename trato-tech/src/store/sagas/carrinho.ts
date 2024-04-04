import { call, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { carregarPagamento, finalizarPagamento, mudarCarrinho, mudarQuantidade, mudarTotal, resetarCarrinho } from "../reducers/carrinho";
import usuariosServices from "../../services/usuarios";
import cartoesServices from "../../services/cartoes";
import bandeirasServices from "../../services/bandeiras";
import { adicionarUsuario } from "../reducers/usuario";
import { RootState } from "..";
import { ICarrinho } from "../../interfaces/ICarrinho";
import { IProdutos } from "../../interfaces/IProdutos";
import { createStandaloneToast } from "@chakra-ui/toast";



const { toast } = createStandaloneToast();

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
        yield put(adicionarUsuario({ ...usuario, cartoes: cartoesComBandeiras}))
    } catch (error) {
        console.log(error);
    }
}

function* calcularTotal() {
    yield delay(500)
    const state: RootState = yield select()
    const total: any = state.carrinho.data.reduce((total: number, itemNoCarrinho) => {
        const item = state.produtos.find(item => item.id === itemNoCarrinho.id) as IProdutos
        return total + item.preco * itemNoCarrinho.quantidade
    }, 0)
    yield put(mudarTotal(total))
}

function* finalizarPagamentoSaga({ payload }: any): Generator {
    const {valorTotal, formaDePagamento} = payload

    if(valorTotal > formaDePagamento.saldo) {
        return yield toast({
            title: 'Erro',
            description: 'Saldo insuficiente',
            status: 'error',
            duration: 2000,
            isClosable: true
        });
    } else {
        yield toast({
            title: 'Sucesso!',
            description: 'Compra realizada com sucesso!',
            status: 'success',
            duration: 2000,
            isClosable: true
          });
        yield put(resetarCarrinho())
    }
}

export function* watcherCarrinho(): Generator {
    yield takeLatest(carregarPagamento, workerCarrinho)
    yield takeEvery([mudarQuantidade, mudarCarrinho], calcularTotal)
    yield takeLatest(finalizarPagamento, finalizarPagamentoSaga)
}