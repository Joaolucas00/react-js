import styled from "styled-components"
import ItemNav from "./ItemNav"
import Banner from "../Banner"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;

`


const BarraLateral = () => {
    return (
        <aside style={{display: "flex"}}>
            <nav>
                <ListaEstilizada>
                    <ItemNav 
                        iconeInativo="/icones/home-inativo.png"
                        iconeAtivo="/icones/home-ativo.png"
                        ativo={true}
                    >Inicio</ItemNav>
                    <ItemNav 
                        iconeInativo="/icones/mais-vistas-inativo.png"
                        iconeAtivo="/icones/mais-vistas-ativo.png"
                    >Mais Vistas</ItemNav>
                    <ItemNav 
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                        iconeAtivo="/icones/mais-curtidas-ativo.png"
                    >Mais curtidas</ItemNav>
                    <ItemNav 
                        iconeInativo="/icones/novas-inativo.png"
                        iconeAtivo="/icones/novas-ativo.png"
                    >Novas</ItemNav>
                    <ItemNav 
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                        iconeAtivo="/icones/surpreenda-me-ativo.png"
                    >Surpreenda-me</ItemNav>
                    
                </ListaEstilizada>
            </nav>
            <Banner texto="A galeria mais completa de fotos do espaço!"></Banner>
        </aside>
    )
}

export default BarraLateral