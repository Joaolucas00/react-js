import styled from "styled-components"

const HeaderEstilizado = styled.header`
    display: flex;
    width: 100%;

    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 5%;
`

const ImagemLogo = styled.div`
    background-image: url('imagens/logo.png');
    width: 351px;
    height: 117px;
    @media screen and (max-width: 800px) {
        width: 200px;
        height: 200px;
        background-image: url('imagens/logo-pequeno.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
`

const ImgParticipante = styled.img`
    width: 100%;
    margin-bottom: -8%;
`

const Header = () => {
    return (
        <HeaderEstilizado>
            <div>
                <ImagemLogo/>
            </div>
            <div>
                <ImgParticipante src="/imagens/participante.png"/>
            </div>
        </HeaderEstilizado>
    )
}

export default Header