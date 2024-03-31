import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICategorias } from '../../interfaces/ICategorias';
import categoriasServices from '../../services/categorias';
import { createStandaloneToast } from '@chakra-ui/toast';
import { resetarCarrinho } from './carrinho';

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
          status: 'success',
          duration: 2000,
          isClosable: true
        })
        return payload
      })
      .addCase(getCategorias.pending, (state, { payload }) => {
        toast({
          title: 'Carregando',
          description: 'Carregando categorias',
          status: 'loading',
          duration: 2000,
          isClosable: true
        })
      })
      .addCase(getCategorias.rejected, (state, { payload }) => {
        toast({title: 'Erro',
        description: 'Erro na busca de categorias',
        status: 'error',
        duration: 2000,
        isClosable: true
        })
      })
      .addCase(resetarCarrinho.type, () => {
        toast({title: 'Sucesso!',
        description: 'Compra completada com sucesso!',
        status: 'success',
        duration: 2000,
        isClosable: true
        })
      })
    }
})


export default categoriasSlice.reducer;
  