import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";
import produtosSlice from "./reducers/produtos";
import carrinhoSlice from "./reducers/carrinho";
import buscaSlice from './reducers/busca';
import usuarioSlice from './reducers/usuario';
//import { categoriasListener } from "./middlewares/categorias";
import { produtosListener } from "./middlewares/produtos";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";



const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        produtos: produtosSlice,
        carrinho: carrinhoSlice,
        busca:  buscaSlice,
        usuario: usuarioSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(
        //categoriasListener.middleware, 
        produtosListener.middleware,
        sagaMiddleware
        ),
});

sagaMiddleware.run(rootSaga)


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch