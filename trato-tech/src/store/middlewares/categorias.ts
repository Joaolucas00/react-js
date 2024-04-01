import { createListenerMiddleware } from "@reduxjs/toolkit";
import { adicionarCategorias, adicionarUmaCategoria, carregarCategorias, carregarUmaCategoria } from "../reducers/categorias";
import categoriasServices from "../../services/categorias";
import criarTarefa from "./utils/criarTarefa";



export const listener = createListenerMiddleware();

listener.startListening({
    actionCreator: carregarCategorias,
    effect: async (action, { dispatch, fork, unsubscribe }) => {
        
        await criarTarefa({fork, dispatch, get: categoriasServices.get, action: adicionarCategorias, textoCarregando: 'Carregando categorias', textoSucesso: 'Categorias carregadas com sucesso', textoErro: 'Erro na busca'})
        unsubscribe()

        /*
        toast({
            title: 'Carregando',
            description: 'Carregando categorias',
            status: 'loading',
            duration: 2000,
            isClosable: true
          });

          const tarefa = fork(async api => {
            await api.delay(1000)
            return await categoriasServices.get();
        })

        const response = await tarefa.result;

        if (response.status === 'ok') {
            dispatch(adicionarCategorias(response.value));
            toast({
                title: 'Sucesso!',
                description: 'Categorias carregadas com sucesso!',
                status: 'success',
                duration: 2000,
                isClosable: true
              });
              unsubscribe()
        }

        if (response.status === 'rejected') {
            toast({title: 'Erro',
            description: 'Erro na busca de categorias',
            status: 'error',
            duration: 2000,
            isClosable: true
            });
        }*/
    }

});

listener.startListening({
    actionCreator: carregarUmaCategoria,
    effect: async (action, { fork, dispatch }) => {

        const nomeCategoria = action.payload
        

        await criarTarefa({fork, dispatch, get: () => categoriasServices.getUmaCategoria(nomeCategoria), action: adicionarUmaCategoria, textoCarregando: `Carregando categoria ${nomeCategoria}`, textoSucesso: `Categoria ${nomeCategoria} carregada com sucesso`, textoErro: `Erro na busca da categoria ${nomeCategoria}`})
    }
})
