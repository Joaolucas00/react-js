import style from './style.module.scss'

interface BotaoProps {
    texto: string
    onClick?: () => void
}

const Botao = ({texto, onClick}: BotaoProps) => {
    return (
        <button onClick={onClick} className={style.botao}>{texto}</button>
    )
}

export default Botao