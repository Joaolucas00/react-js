import Header from '../../componentes/Header'
import styles from './Home.module.scss'
import imagem from '../../assets/inicial.png'


const Home = () => {
    return (
        <div>
            <Header 
                titulo='Classificados Tech'
                descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
                imagem={imagem}
                className={styles.header}
            />
        </div>
    )
}

export default Home