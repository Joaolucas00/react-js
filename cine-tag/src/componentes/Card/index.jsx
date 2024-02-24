import styled from "styled-components"

const DivCard = styled.div`
    display: flex;
    background-color: #76767678;
    border-radius: 10px;
    box-shadow: 7px 5px 36px red;
    width: 16.125em;
    height: 25.4375em;
    flex-direction: column;

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
`

const IconeFavorito = styled.div`
    margin: 10px 35px;
    & > img {
        cursor: pointer;
    }
`


const Card = ({capa, titulo, id}) => {
    return(
        <DivCard>
            <CapaCard src={capa} alt={titulo}/>
            <TituloCard>{titulo}</TituloCard>
            <IconeFavorito><img src="imagens/favorite_outline.png" alt="icone de favorito"/></IconeFavorito>            
        </DivCard>
    )

}

export default Card