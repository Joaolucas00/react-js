import { createContext, useState } from "react"

export const FavoritoContext = createContext()

const FavoritoProvider = ({children}) => {
    const [teste, setTeste] = useState("oi")
    return (
        <FavoritoContext.Provider value={{teste, setTeste}}>
            {children}
        </FavoritoContext.Provider>
    )
}

export default FavoritoProvider