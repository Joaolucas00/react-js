import Header from '../../componentes/Header'
import styles from './Home.module.scss'
import imagem from '../../assets/inicial.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Home = () => {
    const navigate = useNavigate();
    const categorias = useSelector((state: RootState) => state.categorias)
    return (
        <div>
            <Header 
                titulo='Classificados Tech'
                descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
                imagem={imagem}
                className={styles.header}
            />
            <div className={styles.categoiras}>
                <div className={styles['categorias-title']}>
                    <h1>Categorias</h1>
                </div>
                <div className={styles['categorias-container']}>
                {categorias.map((categoria, index) => (
                    <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
                    <img src={categoria.thumbnail} alt={categoria.nome} />
                    <h1>{categoria.nome}</h1>
                    </div>
          ))}
                </div>
            </div>
        </div>
    )
}

export default Home