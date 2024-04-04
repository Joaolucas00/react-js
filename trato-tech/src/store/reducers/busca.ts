import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const buscaSlice = createSlice({
    name: 'busca',
    initialState,
    reducers: {
        mudarBusca: (_, { payload }): string => payload,
        resetarBusca: (): string => initialState
    }
})

export default buscaSlice.reducer

export const { mudarBusca, resetarBusca } = buscaSlice.actions