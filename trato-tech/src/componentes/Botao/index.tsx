import { ReactNode } from "react"
import styles from './Botao.module.scss'

interface BotaoProps {
    children?: ReactNode,
    type?: any,
    disabled?: any
    onClick?: () => void
    dataTestid?: string
}

const Botao = ({ children, type, onClick, disabled, dataTestid }: BotaoProps) => {
    return (
        <button data-testid={dataTestid} disabled={disabled} className={styles.button} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Botao