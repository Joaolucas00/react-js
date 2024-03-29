import { ReactNode } from "react"
import styles from './Botao.module.scss'

interface BotaoProps {
    children?: ReactNode,
    type?: any,
    onClick?: () => void
}

const Botao = ({ children, type, onClick }: BotaoProps) => {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Botao