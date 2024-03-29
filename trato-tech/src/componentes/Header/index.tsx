import { ReactNode } from 'react'
import styles from './Header.module.scss'


interface PropsHeader {
    titulo: string,
    descricao: string,
    imagem?: string,
    className?: string,
    children?: ReactNode
}

const Header = ({ titulo, descricao, imagem, className, children}: PropsHeader) => {
    return (
        <header className={`${styles.header} ${!imagem ? styles.headerSemImagem : ''} ${className}`}>
            <div className={`${styles.headerTexto} ${!imagem ? styles.textCenter : ''}`}>
                <h1>{titulo}</h1>
                <h2>{ descricao }</h2>
            </div>
            {imagem && 
            <div className={styles.headerImagem}>
                <img src={imagem} alt='Imagem'></img>
            </div>
            }
            {children}
        </header>
    )
}

export default Header