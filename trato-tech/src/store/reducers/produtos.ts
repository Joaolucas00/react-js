import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { IProdutos } from '../../interfaces/IProdutos';
import produtosServices from '../../services/produtos';

const initialState: IProdutos[] = [];

export const getProdutos = createAsyncThunk('produtos/get', produtosServices.get)


const produtosSlice = createSlice({
    name: 'produtos',
    initialState,
    reducers: {
      mudarFavorito: (state, { payload }): void => {
        state.map(produto => {
          if (produto.id === payload) produto.favorito = !produto.favorito;
          return produto;
        })
      },
      cadastrarProduto: (state, { payload }): void => {
        state.push({...payload, id: uuid()})
      },
      mudarProduto: (state, { payload }): void => {
        const index = state.findIndex(produto => produto.id === payload.id)
        Object.assign(state[index], payload.produto)
      },
      deletarProduto: (state, { payload }): void => {
        const index = state.findIndex(produto => produto.id === payload)
        state.splice(index, 1)
      },
      addProdutos: (state, { payload }) => {
        state.push(...payload)
      }
    },
    extraReducers: builder => {
      builder.addCase(getProdutos.fulfilled, (state, { payload }) => {
        console.log('payload', payload);
        
        state.push(...payload)
      })
    }
})

export const { mudarFavorito, cadastrarProduto, mudarProduto, deletarProduto, addProdutos } = produtosSlice.actions

export default produtosSlice.reducer;