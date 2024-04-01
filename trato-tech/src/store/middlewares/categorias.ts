import { createListenerMiddleware } from "@reduxjs/toolkit";
import { adicionarCategorias, carregarCategorias } from "../reducers/categorias";
import categoriasServices from "../../services/categorias";


export const listener = createListenerMiddleware();

listener.startListening({
    actionCreator: carregarCategorias,
    effect: async (action, { dispatch, fork }) => {
        const tarefa = fork(async api => {
            console.log("estado da api: ", api.signal);
            return await categoriasServices.get();
        })

        const response = await tarefa.result;

        if (response.status === 'ok') {
            dispatch(adicionarCategorias(response.value));
        }
    }
})
