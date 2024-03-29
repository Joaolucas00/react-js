import styles from './Header.module.scss'

interface PropsHeader {
    titulo: string,
    descricao: string,
    imagem: string,
    className?: string
}

const Header = ({ titulo, descricao, imagem, className}: PropsHeader) => {
    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles.headerTexto}>
                <h1>{titulo}</h1>
                <h2>{ descricao }</h2>
            </div>
            <div className={styles.headerImagem}>
                <img src={imagem} alt='Imagem'></img>
            </div>
        </header>
    )
}

export default Header