import { useState, createContext, ReactNode, useContext } from "react";
import {v4 as uuIdv4} from 'uuid'
import { IListaDeEstudos } from "../interfaces/IListaDeEstudos";

interface ListaEstudoContextType {
    listaDeEstudos: IListaDeEstudos[]
    setListaDeEstudos: React.Dispatch<React.SetStateAction<IListaDeEstudos[]>>
}

interface ListaEstudosProps {
    children: ReactNode
}

export const ListaDeEstudosContext = createContext<ListaEstudoContextType | undefined>(undefined)

export default function ListaDeEstudosProvider({children}: ListaEstudosProps) {

    const [listaDeEstudos, setListaDeEstudos] = useState<IListaDeEstudos[]>([
        {id: uuIdv4(), aula: "Java", tempo: "01:00:00", completado: false, selecionado: false},
        {id: uuIdv4(), aula: "Python", tempo: "01:00:00", completado: false, selecionado: false},
    ]) 
    
    return (
        <ListaDeEstudosContext.Provider value={{listaDeEstudos, setListaDeEstudos}}>
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