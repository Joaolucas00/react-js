import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";
import produtosSlice from "./reducers/produtos";
import carrinhoSlice from "./reducers/carrinho";

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        produtos: produtosSlice,
        carrinho: carrinhoSlice
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch