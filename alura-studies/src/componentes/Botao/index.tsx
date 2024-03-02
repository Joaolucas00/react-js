import styles from './Botao.module.css'


interface BotaoProps {
    texto: string
}

const Botao = ({texto}: BotaoProps) => {
    return (
        <button className={styles.botao}>{texto}</button>
    )
}

export default Botao