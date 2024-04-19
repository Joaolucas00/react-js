import { Outlet } from "react-router-dom"
import EstilosGlobais from "../EstilosGlobais"
import Header from "../Header"
import styled from "styled-components"

const MainEstilizado = styled.main`
    display: flex;
    background-color: white;
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    border-radius: 10% 10% 0 0;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
`



const PaginaPadrao = () => {
    return (
        <>
            <EstilosGlobais/>
            <Header/>
            <MainEstilizado>
            <Outlet/>
            </MainEstilizado>
        </>
    )
}

export default PaginaPadrao