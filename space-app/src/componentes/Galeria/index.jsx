import styled from "styled-components"
import { useState } from "react"
import Card from "./Card"


const TituloPopulares = styled.h2`
    color: #7B78E6;
    font-size: 32px;
    text-align: center;

`

const TituloNav = styled.h2`
    color: #7B78E6;
    font-size: 32px;
`

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = ({ fotos = [], aoSelecionarFoto }) => {
    return (
        <>
            <GaleriaContainer>
                <SecaoFluida>
                    <TituloNav>Navegue pela galeria</TituloNav>
                    <ImagensContainer>
                        {fotos.map(foto => <Card aoZoom={aoSelecionarFoto} fonte={foto.fonte} path={foto.path} titulo={foto.titulo} foto={foto}/>)}
                    </ImagensContainer>
                </SecaoFluida>
                <div style={{minWidth: 212}}>
                    <TituloPopulares>Populares</TituloPopulares>
                </div>
            </GaleriaContainer>
        </>
    )
}

export default Galeria