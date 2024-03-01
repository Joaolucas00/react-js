import { ReactElement } from 'react'
import './Botao.css'

import React from 'react'

interface BotaoProps {
    children: ReactElement
}

const Botao = (props: BotaoProps) => {
    return (<button>
        {props.children}
    </button>)
}

export default Botao