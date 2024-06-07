import { MouseEvent, ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
    children: ReactNode,
    type?: 'primary'|'secondary' | 'orange',
    onClick?: (e:MouseEvent<HTMLButtonElement>)=>void 
}
const Button = ({children, type, onClick, ...rest}: Props) =>{
    return <button onClick={onClick} className={`${type==="primary"? styles.primary_btn : type==="secondary"? styles.secondary_btn:styles.orange_btn} ${styles.btn}`} {...rest} >{children}</button>
}
export default Button;