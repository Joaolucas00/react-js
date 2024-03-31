import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICategorias } from '../../interfaces/ICategorias';
import categoriasServices from '../../services/categorias';
import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast()

const initialState: ICategorias[] = [];

export const getCategorias = createAsyncThunk('categorias/get', categoriasServices.get)

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(getCategorias.fulfilled, (state, { payload }) => {
        toast({
              title: 'Sucesso!',
              description: 'Categorias carregadas com sucesso!',
              duration: 2000,
              isClosable: true,
              status: 'success'
        })
        return payload
      })
      .addCase(getCategorias.pending, (state, { payload }) => {
        toast({
          title: 'Carregando...',
          description: 'Carregando categorias',
          duration: 2000,
          isClosable: true,
          status: 'loading'
        })
        
      })
      .addCase(getCategorias.rejected, (state, { payload }) => {
        toast({
          title: 'ERRO',
          description: 'Erro na busca de categorias',
          duration: 2000,
          isClosable: true,
          status: 'error'
        })
      })
    }
})


export default categoriasSlice.reducer;
  