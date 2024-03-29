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
        },
        mudarQuantidade: (state, { payload }) => {
            state.map(itemNoCarrinho => {
                if(itemNoCarrinho.id === payload.id) itemNoCarrinho.quantidade += payload.quantidade;
                return itemNoCarrinho
            })
        }
    }
})
export const { mudarCarrinho, mudarQuantidade } = carrinhoSlice.actions

export default carrinhoSlice.reducer