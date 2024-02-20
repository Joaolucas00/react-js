import styled from "styled-components"
import Card from "./Card"


const CardContainer = styled.div`
    display: flex;
    width: 1000px;
    margin: 0 auto;
    gap: 43px;
    flex-direction: row;
    flex-wrap: wrap;
`


const Imagens = ({ fotos = []}) => {
    return (
        <>
        <CardContainer>
            {fotos.map(foto => <Card path={foto.path} titulo={foto.titulo} key={foto.id} fonte={foto.fonte}/>)}
        </CardContainer>
        </>
    )
}


export default Imagens