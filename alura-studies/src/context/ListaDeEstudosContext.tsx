import { useState, createContext, ReactNode, useContext } from "react";
import {v4 as uuIdv4} from 'uuid'
import { IListaDeEstudos } from "../interfaces/IListaDeEstudos";

interface ListaEstudoContextType {
    listaDeEstudos: IListaDeEstudos[];
    setListaDeEstudos: React.Dispatch<React.SetStateAction<IListaDeEstudos[]>>;
    estudoSelecionado: IListaDeEstudos | undefined;
    setEstudoSelecionado: React.Dispatch<React.SetStateAction<IListaDeEstudos | undefined>>
}

interface ListaEstudosProps {
    children: ReactNode
}

export const ListaDeEstudosContext = createContext<ListaEstudoContextType | undefined>(undefined)

export default function ListaDeEstudosProvider({children}: ListaEstudosProps) {

    const [listaDeEstudos, setListaDeEstudos] = useState<IListaDeEstudos[]>([]) 
    const [estudoSelecionado, setEstudoSelecionado] = useState<IListaDeEstudos>()
    
    return (
        <ListaDeEstudosContext.Provider value={{listaDeEstudos, setListaDeEstudos, estudoSelecionado, setEstudoSelecionado}}>
                {children}
        </ListaDeEstudosContext.Provider>
    )
}

export function useListaDeEstudos(): ListaEstudoContextType {
    const context = useContext(ListaDeEstudosContext)
    if (!context) {
        throw Error('useListaDeEstudosContext deve ser usado dentro de um ListaDeEstudosContext')
    }
    return context
}