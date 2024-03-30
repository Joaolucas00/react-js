import { forwardRef } from 'react'
import styles from './Input.module.scss'

interface InputProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = ({ value, onChange}: InputProps, ref?: any) => {
    return (
        <input ref={ref} value={value} onChange={onChange} className={styles.input}/>
    )
}

export default forwardRef(Input)