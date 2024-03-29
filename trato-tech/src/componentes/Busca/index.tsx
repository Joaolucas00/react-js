import { useDispatch, useSelector } from 'react-redux'
import styles from './Busca.module.scss'
import { RootState } from '../../store'
import { mudarBusca, resetarBusca } from '../../store/reducers/busca'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Busca = () => {

    const busca = useSelector((state: RootState) => state.busca)
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(() => {
        dispatch(resetarBusca())
    }, [location.pathname, dispatch])

    return (
        <div className={styles.busca}>
            <input
                className={styles.input}
                placeholder='O que você busca?'
                value={busca}
                onChange={(evento) => dispatch(mudarBusca(evento.target.value))}
            />
        </div>
    )
}

export default Busca