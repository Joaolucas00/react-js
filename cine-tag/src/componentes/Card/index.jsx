import { Link } from "react-router-dom"
import { useFavoritoContext } from "../../context/FavoritosContext"
import styled from "styled-components"

const DivCard = styled.div`
    display: flex;
    background-color: #76767678;
    border-radius: 10px;
    box-shadow: 2px 5px 15px #00000070;
    width: 16.125em;
    height: 35.4375em;
    justify-content: space-between;
    flex-direction: column;
    & > a {
        font-style: normal;
        text-decoration: none;
        color: black;
    }
`

const TituloCard = styled.h2`
    text-align: center;
    margin-top: 5%;
    font-size: 1.125rem;
    font-family: 'Montserrat';
    font-weight: 500;
`

const CapaCard = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
`

const IconeFavorito = styled.div`
    margin: 10px 35px;
    & > img {
        cursor: pointer;
    }
`


const Card = ({capa, titulo, id}) => {
    const {favoritos, adicionarFavorito} = useFavoritoContext()
    const favoritado = favoritos.some((fav) => fav.id === id)
    const icone = favoritado ? '/imagens/favorite.png' : '/imagens/favorite_outline.png'
    return(
        <DivCard>
            <Link to={`/player/${id}`}>
                <CapaCard src={capa} alt={titulo}/>
                <TituloCard>{titulo}</TituloCard>
            </Link>
            <IconeFavorito><img onClick={() => adicionarFavorito({id, titulo, capa})} src={icone} alt="icone de favorito"/></IconeFavorito>            
        </DivCard>
    )

}

export default Card