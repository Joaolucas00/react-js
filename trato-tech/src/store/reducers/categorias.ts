import { createSlice } from '@reduxjs/toolkit';
import { ICategorias } from '../../interfaces/ICategorias';


const initialState: ICategorias[] = [];

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    reducers: {
      getCategorias: (state, { payload }) => {
        state.push(...payload)
      }
    }
})

export const { getCategorias } = categoriasSlice.actions

export default categoriasSlice.reducer;
  