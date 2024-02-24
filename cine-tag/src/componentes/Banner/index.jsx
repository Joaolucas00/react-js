import { useState } from "react"
import styled from "styled-components"

const BannerEstilizado = styled.div`
    background-image: url(${props => "/imagens/banner-" + props.$url + ".png"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 35vh;
`


const Banner = ({urlImagem}) => {
    return(
        <BannerEstilizado $url={urlImagem}/>
    )
}

export default Banner