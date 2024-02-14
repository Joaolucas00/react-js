import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo"
import ReactMarkdown from "react-markdown"
import './Conteudo.css'

const Conteudo = () => {
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return (<h1>Post não encontrado</h1>)
    }

    return (
        <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
            <div>
                <ReactMarkdown className="post-markdown-container">
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}

export default Conteudo