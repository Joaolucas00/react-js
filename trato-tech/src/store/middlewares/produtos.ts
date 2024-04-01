import { createListenerMiddleware } from "@reduxjs/toolkit";
import { carregarUmaCategoria } from "../reducers/categorias";
import criarTarefa from "./utils/criarTarefa";
import produtosServices from "../../services/produtos";
import { adicionarProduto } from "../reducers/produtos";
import { RootState } from "..";


export const produtosListener = createListenerMiddleware();

produtosListener.startListening({
    actionCreator: carregarUmaCategoria,
    effect: async (action, { fork, dispatch, unsubscribe, getState}) => {
        const { produtos } = getState() as RootState

        if (produtos.length === 25) return unsubscribe()

        const nomeCategoria = action.payload
        const produtosCarregados = produtos.some(produto => produto.categoria === nomeCategoria)

        if(produtosCarregados) return;

        await criarTarefa({fork, dispatch, get: () => produtosServices.getProduto(nomeCategoria), action: adicionarProduto, textoCarregando: `Carregando produtos da categoria ${nomeCategoria}`, textoSucesso: `Produtos da categoria ${nomeCategoria} carregados com sucesso`, textoErro: `Erro na busca de ${nomeCategoria}`})

    }
})