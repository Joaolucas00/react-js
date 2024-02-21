import styled from "styled-components"
import Card from "../Galeria/Card"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    margin: 0;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
            background-color: transparent;
            border: none;
            margin: 0;
        }
    }
`

const BotaoIcone = styled.button`
    cursor: pointer;
`


const ModalZoom = ({ foto, aoFechar }) => {
    return (foto &&
        <>
            
            <Overlay/>
            <DialogEstilizado open={!!foto} onClose={aoFechar}>
                <Card foto={foto} expandida={true}></Card>
            <form method="dialog">
                <BotaoIcone onSubmit={"dialog"}>
                    <img src="/icones/fechar.png" alt="Icone de fechar" />
                </BotaoIcone>
            </form>
            </DialogEstilizado>
        </>
    )
}

export default ModalZoom