import styled from "styled-components"

const DivCard = styled.div`

`

const TituloCard = styled.h2`

`

const CapaCard = styled.figure`

`

const IconeFavorito = styled.div`

`


const Card = ({capa, titulo, link}) => {
    return(
        <DivCard>
            <CapaCard/>
            <TituloCard></TituloCard>
            <IconeFavorito><img src="imagens/favorite.png" alt="icone de favorito"></img></IconeFavorito>            
        </DivCard>
    )

}

export default Card