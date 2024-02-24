import { createContext, useState } from "react"

export const FavoritoContext = createContext()

const FavoritoProvider = ({children}) => {
    const [favoritos, setFavoritos] = useState([])
    return (
        <FavoritoContext.Provider value={{favoritos, setFavoritos}}>
            {children}
        </FavoritoContext.Provider>
    )
}

export default FavoritoProvider