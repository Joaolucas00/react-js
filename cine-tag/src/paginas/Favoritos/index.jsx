import { FavoritoContext } from "../../context/FavoritosContext"
import { useContext } from "react"


const Favoritos = () => {
    const {teste, setTeste} = useContext(FavoritoContext)
    return (
        <h1>Favoritos. Teste: {teste}</h1>
    )
}

export default Favoritos