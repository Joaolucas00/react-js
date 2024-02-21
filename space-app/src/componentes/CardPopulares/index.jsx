import styled from "styled-components"
import fotos from './fotos-populares.json'

const TituloPopulares = styled.h2`
    color: #7B78E6;
    font-size: 32px;
    text-align: center;

`

const ColunaFotos = styled.section`
    display: flex;
    gap: 10px;
    flex-direction: column;
`

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #FFF;
    border: 2px solid #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;

    &:hover {
        border-color: #bf5eff;
        transition: border-color 0.3s ease;
    }
`

const CardPopulares = () => {
    return (
        <section>
            <TituloPopulares>Populares</TituloPopulares>
            <ColunaFotos>
                {fotos.map(foto => <Imagem key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </section>
    )
}

export default CardPopulares