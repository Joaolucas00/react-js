import { ReactNode } from "react"
import styles from './Botao.module.scss'

interface BotaoProps {
    children?: ReactNode,
    type?: any,
    disabled?: any
    onClick?: () => void
}

const Botao = ({ children, type, onClick, disabled }: BotaoProps) => {
    return (
        <button disabled={disabled} className={styles.button} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Botao