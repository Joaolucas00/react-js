import Header from '../../componentes/Header';
import styles from './Home.module.scss';
import imagem from '../../assets/inicial.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import Botao from '../../componentes/Botao';
import { useEffect } from 'react';
import { carregarCategorias } from '../../store/reducers/categorias';

const Home = () => {


    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(carregarCategorias())
    }, [dispatch])

    const navigate = useNavigate();
    const categorias = useSelector((state: RootState) => state.categorias)
    return (
        <div>
            <Header 
                titulo='Classificados Tech'
                descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
                imagem={imagem}
                className={styles.header}
            >
            <Botao dataTestid='home-botao-anunciar' onClick={() => navigate('/anuncie')}>Quero anunciar</Botao>
            </Header>
            <div className={styles.categorias}>
                <div className={styles['categorias-title']}>
                    <h1>Categorias</h1>
                </div>
                <div className={styles['categorias-container']}>
                {categorias.map((categoria, index) => (
                    <div data-testid='home-categorias' key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
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