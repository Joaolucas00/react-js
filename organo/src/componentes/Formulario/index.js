import './Formulario.css'
import Input from '../Input'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data-science',
        'DevOps',
        'UX e Design',
        'mobile',
        'Inovação e Gestão'
    ]
    return (
    <section className="formulario">
        <form 
            action={props.action} 
            method={props.method} 
            autoComplete={props.autocomplete}
            >
                <h2>{props.titulo}</h2>
                <Input for="inome" id="inome" label="Nome" placeholder="digite seu nome"/>
                <Input for="icargo" id="icargo" label="Cargo" placeholder="digite seu cargo"/>
                <Input for="iimagem" id="iimagem" label="Imagem" placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa itens={times} label="Times"/>
                <input type="submit" value="enviar"></input>
        </form>
    </section>
    )
}

export default Formulario