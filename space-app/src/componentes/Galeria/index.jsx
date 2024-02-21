import styled from "styled-components"
import { useState } from "react"
import Card from "./Card"
import CardPopulares from "../CardPopulares"



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
                        {fotos.map(foto => <Card key={foto.id}  aoZoom={aoSelecionarFoto} foto={foto}/>)}
                    </ImagensContainer>
                </SecaoFluida>
                <div style={{minWidth: 212}}>
                    <CardPopulares/>
                </div>
            </GaleriaContainer>
        </>
    )
}

export default Galeria