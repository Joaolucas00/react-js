import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";
import produtosSlice from "./reducers/produtos";
import carrinhoSlice from "./reducers/carrinho";
import buscaSlice from './reducers/busca';
import { categoriasListener } from "./middlewares/categorias";
import { produtosListener } from "./middlewares/produtos";
import createSagaMiddleware from 'redux-saga'
import { sagaCategorias } from "./sagas/categorias";


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        produtos: produtosSlice,
        carrinho: carrinhoSlice,
        busca:  buscaSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(
        categoriasListener.middleware, 
        produtosListener.middleware,
        sagaMiddleware
        ),
});

sagaMiddleware.run(sagaCategorias)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch