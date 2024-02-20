import styled from "styled-components"
import tags from './tags.json'
const TagsContainer = styled.div`
    display: flex;
    text-align: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    gap: 10px;
    margin: 10px;
`
const BotaoEstilizado = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const TextoTag = styled.p`
    margin-right: 5%;
    font-size: 22px;
    color: white;
`

const Tags = () => {
    return (
        <TagsContainer>
            <TextoTag>Busque por tag: </TextoTag>
            {tags.map(tag => <BotaoEstilizado key={tag.id}>{tag.titulo}</BotaoEstilizado>)}
        </TagsContainer>
    )
}

export default Tags