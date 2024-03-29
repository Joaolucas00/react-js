import './Formulario.css'
import Input from '../Input'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const Formulario = (props) => {

    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Programação')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('#000000')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrar({id: uuidv4(), nome: nome, cargo: cargo, imagem: imagem, time: time, favorito: false})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('Programação')
    }

    const salvarNovoTime = (evento) => {
        evento.preventDefault()
        props.aoCriarTime({nome: nomeTime, corSecundaria: corTime + '8F', corPrimaria: corTime})
        setNomeTime('')
        setCorTime('#000000')
    } 

    return (
    <section className="formulario">
        <form onSubmit={aoSalvar}
            action={props.action} 
            method={props.method} 
            autoComplete={props.autocomplete}
            >
                <h2>{props.titulo}</h2>
                <Input  
                    tipo="text"
                    obrigatorio={true} 
                    for="inome" 
                    id="inome" 
                    label="Nome" 
                    placeholder="digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Input 
                    tipo="text"
                    obrigatorio={true} 
                    for="icargo" 
                    id="icargo" 
                    label="Cargo" 
                    placeholder="digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Input 
                    tipo="text"
                    obrigatorio={true} 
                    for="iimagem" 
                    id="iimagem" 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa obrigatorio={true} value={time} aoAlterado={valor => setTime(valor)} itens={props.times} label="Times"/>
                <Botao>
                    Criar Card
                </Botao>
        </form>
        <form onSubmit={salvarNovoTime}
            action={props.action} 
            method={props.method} 
            autoComplete={props.autocomplete}
            >
                <h2>Novo Time</h2>
                <Input  
                    tipo="text"
                    obrigatorio={true} 
                    for="inome" 
                    id="inome" 
                    label="Nome" 
                    placeholder="digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Input 
                    tipo="color"
                    obrigatorio={true} 
                    for="icor" 
                    id="icor" 
                    label="Cor" 
                    placeholder="Digite a cor do Time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>Criar novo Time</Botao>
        </form>
    </section>
    )
}

export default Formulario