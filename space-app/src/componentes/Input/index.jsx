import styled from "styled-components"

const DivEstilizado = styled.div`
    position: relative;
    display: inline-block;
`


const InputEstilizado = styled.input`
    border: 2px solid #C98CF1;
    background: transparent;
    border-radius: 10px;
    padding: 12px 16px;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    box-sizing: border-box;
    line-height: 20px;
`
const IconeLupa = styled.img`
    position: absolute;
    top: 14%;
    right: 2%;
    width: 38px;
    height: 38px;
`

const Input = ({ props }) => {
    return (
        <DivEstilizado >
            <InputEstilizado placeholder="O que você procura?" {...props}/>
            <IconeLupa src="/icones/search_white_24dp.svg" alt="lupa"/> 
        </DivEstilizado>
    )
}

export default Input