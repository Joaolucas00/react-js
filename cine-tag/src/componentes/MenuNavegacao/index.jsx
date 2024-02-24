import { Link, useLocation } from "react-router-dom"
import styledModule from './MenuNavegacao.module.css'
import styled from "styled-components"

const HeaderNavegacaoFlex = styled.header`
    display: flex;
    gap: 40px;
    height: 88px;
    width: 100%;
    padding: 0% 21% 0% 15%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    box-sizing: border-box;
    a {
        font-size: 1.5rem;
    }

    img {
        height: 70%;
        width: 100%;
        margin-right: 60%;
    }

` 

const MenuNavegacao = () => {

    const localizacao = useLocation()
    return (
        <HeaderNavegacaoFlex>
        <img src="/imagens/logo.png" alt="logo"></img>
        <Link to="/" className={`${localizacao.pathname === "/" ? styledModule.linkCorrente : styledModule.link}`}>Home</Link>
        <Link to="/favoritos" className={`${localizacao.pathname === "/favoritos" ? styledModule.linkCorrente : styledModule.link}`} >Favoritos</Link>
        </HeaderNavegacaoFlex>
    )
}

export default MenuNavegacao