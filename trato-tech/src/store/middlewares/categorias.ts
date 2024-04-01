import { createListenerMiddleware } from "@reduxjs/toolkit";
import { adicionarCategorias, adicionarUmaCategoria, carregarCategorias, carregarUmaCategoria } from "../reducers/categorias";
import categoriasServices from "../../services/categorias";
import criarTarefa from "./utils/criarTarefa";
import { ICategorias } from "../../interfaces/ICategorias";
import { RootState } from "..";



export const categoriasListener = createListenerMiddleware();

categoriasListener.startListening({
    actionCreator: carregarCategorias,
    effect: async (_, { dispatch, fork, unsubscribe }) => {
        
        const response = await criarTarefa({fork, dispatch, get: categoriasServices.get, action: adicionarCategorias, textoCarregando: 'Carregando categorias', textoSucesso: 'Categorias carregadas com sucesso', textoErro: 'Erro na busca'})
        if(response.status === 'ok') unsubscribe();

    }

});


categoriasListener.startListening({
    actionCreator: carregarUmaCategoria,
    effect: async (action, { fork, dispatch, getState, unsubscribe }) => {
        const { categorias } = getState() as RootState;
        const nomeCategoria = action.payload
        const categoriaCarregada = categorias.some((categoria: ICategorias) => categoria.id === nomeCategoria)
        
        if (categoriaCarregada) return;
        if(categorias.length === 5) unsubscribe();

        await criarTarefa({fork, dispatch, get: () => categoriasServices.getUmaCategoria(nomeCategoria), action: adicionarUmaCategoria, textoCarregando: `Carregando categoria ${nomeCategoria}`, textoSucesso: `Categoria ${nomeCategoria} carregada com sucesso`, textoErro: `Erro na busca da categoria ${nomeCategoria}`})
    }
})
