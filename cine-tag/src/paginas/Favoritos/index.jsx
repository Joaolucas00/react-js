import styled from "styled-components"
import { FavoritoContext } from "../../context/FavoritosContext"
import { useContext } from "react"
import Card from "../../componentes/Card"


const TituloPrincipal = styled.h1`
    font-family: 'Montserrat';
    font-weight: 400;
`

const ConteudosFavoritos = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ConteudosCardsFavoritos = styled.section`
    display: flex;
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
`

const Favoritos = () => {
    const { favoritos } = useContext(FavoritoContext)
    return (
        <ConteudosFavoritos>
            <TituloPrincipal>Favoritos. Teste:</TituloPrincipal>
            <ConteudosCardsFavoritos>
                {favoritos.map(fav => <Card {...fav } key={fav.id}></Card>)}
            </ConteudosCardsFavoritos>
        </ConteudosFavoritos>
    )
}

export default Favoritos