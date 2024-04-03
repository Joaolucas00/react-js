import { createAction, createSlice } from "@reduxjs/toolkit";
import { ICarrinho } from "../../interfaces/ICarrinho";

const initialState: ICarrinho[] = []

export const carregarPagamento = createAction('carrinho/carregarPagamento')

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }): ICarrinho[] => {
            const temProduto = state.some(produto => produto.id === payload)
            if(!temProduto) return [...state, {id: payload, quantidade: 1}];
            return state.filter(produto => produto.id !== payload)
        },
        mudarQuantidade: (state, { payload }): void => {
            state.map(itemNoCarrinho => {
                if(itemNoCarrinho.id === payload.id) itemNoCarrinho.quantidade += payload.quantidade;
                return itemNoCarrinho
            })
        },
        resetarCarrinho: (): ICarrinho[] => initialState,
    }
})
export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer