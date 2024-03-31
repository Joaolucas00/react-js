import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICategorias } from '../../interfaces/ICategorias';
import categoriasServices from '../../services/categorias';


const initialState: ICategorias[] = [];

export const getCategorias = createAsyncThunk('categorias/get', categoriasServices.get)

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    reducers: {
      addCategorias: (state, { payload }) => {
        state.push(...payload)
      }
    },
    extraReducers: builder => {
      builder.addCase(getCategorias.fulfilled, (state, { payload }) => {
        state.push(...payload)
      })
    }
})

export const { addCategorias } = categoriasSlice.actions

export default categoriasSlice.reducer;
  