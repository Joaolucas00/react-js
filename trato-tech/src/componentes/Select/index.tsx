import { ReactNode, forwardRef } from 'react';
import styles from './Select.module.scss';

interface PropsSelect {
    value?: string;
    onChange?: () => void;
    children?: ReactNode;
}

function Select({ value, onChange, children, ...outrosProps }: PropsSelect, ref?: any) {
  return (
    <select
      ref={ref}
      value={value}
      onChange={onChange}
      {...outrosProps}
      className={styles.select}
    >
      {children}
    </select>
  )
}

export default forwardRef(Select);