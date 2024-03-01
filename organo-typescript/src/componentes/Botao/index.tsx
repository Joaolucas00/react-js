import { ReactElement } from 'react'
import './Botao.css'

import React from 'react'

interface BotaoProps {
    chilren: ReactElement
}

const Botao = (props: BotaoProps) => {
    return (<button>
        {props.chilren}
    </button>)
}

export default Botao