import { Link, Outlet, useLocation } from "react-router-dom"
import styles from './PaginaPrincipal.module.css'
import styled from "styled-components"
import Rodape from "../Rodape"
import Banner from "../Banner"

const NavegacaoFlex = styled.nav`
    display: flex;
    gap: 40px;
    height: 10vh;
    width: 100%;
    padding: 0% 21% 0% 10%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    box-sizing: border-box;
    a {
        font-size: 1.5rem;
        font-family: 'Montserrat';
        font-weight: 300;
    }
` 

const ConteudoPrincipal = styled.main`
    height: 90vh;
`

const PaginaPrincipal = () => {

    const localizacao = useLocation()
    console.log(localizacao.pathname);
    return (<>
        <NavegacaoFlex>
        <Link to="/" style={{flexGrow: 1}}>
            <img src="/imagens/logo.png" alt="logo"></img>
        </Link>            
        <Link to="/" className={`${localizacao.pathname === "/" ? styles.linkCorrente : styles.link}`}>Home</Link>
        <Link to="/favoritos" className={`${localizacao.pathname === "/favoritos" ? styles.linkCorrente : styles.link}`} >Favoritos</Link>

        </NavegacaoFlex>
        <Banner urlImagem={localizacao.pathname.replace(/[0-9]/, '').replaceAll('/', '') || 'home'}/>
        <ConteudoPrincipal>
            <Outlet/>
        </ConteudoPrincipal>
        <Rodape/>
        </>
    )
}

export default PaginaPrincipal