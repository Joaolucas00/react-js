import Card from "../../componentes/Card"
import styled from "styled-components"
import videos from '../../json/db.json'

const ConteinerFlex = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 35px;
    h1 { 
        font-family: 'Montserrat';
        font-weight: 400;
        margin-top: 50px;
    }
`


const ConteudosCards = styled.section`
    display: flex;
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
`

const Home = () => {
    return(
        <ConteinerFlex>
            <h1>Um lugar para guardar seus vídeos!</h1>
            <ConteudosCards>
                {videos.map(video => <Card {...video} key={video.id}/>)}
            </ConteudosCards>
        </ConteinerFlex>
    )
}

export default Home