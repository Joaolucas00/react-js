import styled from "styled-components"

const CardDiv = styled.figure`
    width: ${props => props.$expandida ? '90%' : '400px'};
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const BotaoIcone = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 20px;
`

const Card = ({expandida = false, foto, aoZoom}) => {
    return (
            <CardDiv $expandida={expandida}>
                <img src={foto.path} alt="foto"></img>
                <figcaption>
                    <h3>{foto.titulo}</h3>
                    <footer> 
                        {expandida ? 
                        <>
                        <p>{foto.fonte}</p>
                        <BotaoIcone><img src="/icones/favorito.png" alt="" /></BotaoIcone>
                        </>
                        :
                        <> <p>{foto.fonte}</p>
                        <BotaoIcone><img src="/icones/favorito.png" alt="" /></BotaoIcone>
                        <BotaoIcone onClick={() => aoZoom(foto)}><img src="/icones/expandir.png" alt="" /></BotaoIcone>
                        </>}

                    </footer>
                </figcaption>
            </CardDiv>
    )
}

export default Card