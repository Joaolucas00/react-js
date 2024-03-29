import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const buscaSlice = createSlice({
    name: 'busca',
    initialState,
    reducers: {
        mudarBusca: (state, { payload}) => payload,
        resetarBusca: () => initialState
    }
})

export default buscaSlice.reducer

export const { mudarBusca, resetarBusca } = buscaSlice.actions