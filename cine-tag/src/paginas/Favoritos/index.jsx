import { FavoritoContext } from "../../context/FavoritosContext"
import { useContext } from "react"


const Favoritos = () => {
    const {favoritos, setFavoritos} = useContext(FavoritoContext)
    return (
        <h1>Favoritos. Teste: {favoritos}</h1>
    )
}

export default Favoritos