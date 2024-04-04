import { createAction, createSlice } from "@reduxjs/toolkit";
import { ICarrinho } from "../../interfaces/ICarrinho";

interface IInitialState {
    data: ICarrinho[];
    total: number
}

interface IPagamento {
    valorTotal: number;
    formaDePagamento: any
}

const initialState: IInitialState = {data: [], total: 0}

export const carregarPagamento = createAction('carrinho/carregarPagamento')

export const finalizarPagamento = createAction<IPagamento>('finalizarPagamento/carregarPagamento')

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }): any => {
            const temProduto = state.data.some(produto => produto.id === payload)
            if(!temProduto) return {total: state.total, data: [...state.data, {id: payload, quantidade: 1}]};
            return {
                total: state.total,
                data: state.data.filter(produto => produto.id !== payload)
            }
        },
        mudarQuantidade: (state, { payload }): void => {
            state.data = state.data.map(itemNoCarrinho => {
                if(itemNoCarrinho.id === payload.id) itemNoCarrinho.quantidade += payload.quantidade;
                return itemNoCarrinho
            })
        },
        mudarTotal: (state, { payload }) => {
            state.total = payload
        },
        resetarCarrinho: () => initialState,
    }
})
export const { mudarCarrinho, mudarQuantidade, resetarCarrinho, mudarTotal } = carrinhoSlice.actions

export default carrinhoSlice.reducer