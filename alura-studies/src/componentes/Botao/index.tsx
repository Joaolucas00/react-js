import './style.scss'

interface BotaoProps {
    texto: string
}

const Botao = ({texto}: BotaoProps) => {
    return (
        <button className='botao'>{texto}</button>
    )
}

export default Botao