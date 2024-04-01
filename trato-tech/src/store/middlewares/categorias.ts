import { createListenerMiddleware } from "@reduxjs/toolkit";
import { getCategorias } from "../reducers/categorias";


export const listener = createListenerMiddleware();

listener.startListening({
    actionCreator: getCategorias.pending,
    effect: async (action) => {
        console.log('Buscando categorias: ', action)
    }
})
