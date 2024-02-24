import { createContext, useContext, useState } from "react"

export const FavoritoContext = createContext()

export default function FavoritoProvider({children})  {
    const [favoritos, setFavoritos] = useState([])
    return (
        <FavoritoContext.Provider value={{favoritos, setFavoritos}}>
            {children}
        </FavoritoContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favoritos, setFavoritos} = useContext(FavoritoContext)

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favoritos.some(item => item.id === novoFavorito.id)

        let novaLista = [...favoritos]

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito)
            return setFavoritos(novaLista)
        }

        novaLista = favoritos.filter((fav) => fav.id !== novoFavorito.id)
        
        return setFavoritos(novaLista)

    }

    return {favoritos, adicionarFavorito}
}