import styles from './Busca.module.scss'

const Busca = () => {
    return (
        <div className={styles.busca}>
            <input
                className={styles.input}
                placeholder='O que você busca?'
            />
        </div>
    )
}

export default Busca