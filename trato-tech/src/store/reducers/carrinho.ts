import { createSlice } from "@reduxjs/toolkit";
import { ICarrinho } from "../../interfaces/ICarrinho";

const initialState: ICarrinho[] = []

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }): ICarrinho[] => {
            const temProduto = state.some(produto => produto.id === payload)
            if(!temProduto) return [...state, {id: payload, quantidade: 1}];
            return state.filter(produto => produto.id !== payload)
        }
    }
})
export const { mudarCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer