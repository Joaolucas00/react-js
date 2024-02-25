import { useParams } from "react-router-dom"
import styled from "styled-components"
import videos from '../../json/db.json'
const VideoFlex = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const TituloVideo = styled.h1`
    font-family: 'Montserrat';
    font-weight: 400;
`

const VideoEstilizado = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;

`

const Player = () => {
    const parametros = useParams()
    const video = videos.find(video => video.id === Number(parametros.id))

    if (!video) {
        return <h1>Não encontrado</h1>
    }

    return (
        <VideoFlex>
            <TituloVideo>{video.titulo}</TituloVideo>
            <VideoEstilizado>
            <iframe width="560" height="315" src={video.link} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </VideoEstilizado>
        </VideoFlex>
    )
}

export default Player