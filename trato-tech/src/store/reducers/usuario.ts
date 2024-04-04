import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    nome?: string,
    id?: string,
    cartoes?: any
}

const initialState: IInitialState = {}

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        adicionarUsuario: (_, { payload }) => {            
            return payload
        }
    }
})

export const { adicionarUsuario } = usuarioSlice.actions

export default usuarioSlice.reducer