import './Formulario.css'
import Input from '../Input'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import { ICadastrados } from '../../interfaces/ICadastrados'
import { ITimes } from '../../interfaces/ITimes'
import {v4 as uuidv4} from 'uuid'

interface FormularioProps {
    aoCadastrar: (colaborador: ICadastrados) => void
    aoCriarTime: (times: ITimes) => void
    action: string
    times: Array<string>
    method: string
    autocomplete: string
    titulo: string
}

const Formulario = (props: FormularioProps) => {

    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Programação')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('#000000')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoCadastrar({id: uuidv4(), nome: nome, cargo: cargo, imagem: imagem, time: time, favorito: false})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('Programação')
    }

    const salvarNovoTime = (evento: React.FormEvent<HTMLFormElement>) => {
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
                    htmlFor="inome" 
                    id="inome" 
                    label="Nome" 
                    placeholder="digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Input 
                    tipo="text"
                    obrigatorio={true} 
                    htmlFor="icargo" 
                    id="icargo" 
                    label="Cargo" 
                    placeholder="digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Input 
                    tipo="text"
                    obrigatorio={true} 
                    htmlFor="iimagem" 
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
                    htmlFor="iinome" 
                    id="iinome" 
                    label="Nome" 
                    placeholder="digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Input 
                    tipo="color"
                    obrigatorio={true} 
                    htmlFor="icor" 
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