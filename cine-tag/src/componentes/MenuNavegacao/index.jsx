import { Link, useLocation } from "react-router-dom"
import styled from './MenuNavegacao.module.css'

const MenuNavegacao = () => {

    const localizacao = useLocation()
    return (
        <>
        <Link to="/" className={`${localizacao.pathname === "/" ? styled.linkCorrente : styled.link}`}>Home</Link>
        <Link to="/favoritos" className={`${localizacao.pathname === "/favoritos" ? styled.linkCorrente : styled.link}`} >Favoritos</Link>
        </>
    )
}

export default MenuNavegacao