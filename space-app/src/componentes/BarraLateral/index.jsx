import styled from "styled-components"
import ItemNav from "./ItemNav"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;

`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNav 
                        iconeInativo="/icones/home-inativo.png"
                        iconeAtivo="/icones/home-ativo.png"
                        ativo={true}
                    >Inicio</ItemNav>
                    <ItemNav 
                        iconeInativo="/icones/mais-vistas-inativo.png"
                        iconeAtivo="/icones/mais-vistas-inativo.png"
                    > Home</ItemNav>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral