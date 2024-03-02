
interface BotaoProps {
    texto: string
}

const Botao = ({texto}: BotaoProps) => {
    return (
        <button>{texto}</button>
    )
}

export default Botao