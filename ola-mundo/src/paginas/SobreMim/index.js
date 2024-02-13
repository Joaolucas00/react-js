import PostModelo from "componentes/PostModelo"
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/erro_404.png'

const SobreMim = () => {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}> Olá, eu sou</h3>
            <img src={fotoSobreMim} alt="foto minha" className={styles.fotoSobreMim}/>
        </PostModelo>
    )
}

export default SobreMim


