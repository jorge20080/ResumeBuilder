import { MouseEvent, ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
    children: ReactNode,
    type?: 'primary'|'secondary',
    onClick?: (e:MouseEvent<HTMLButtonElement>)=>void 
}
const Button = ({children, type, onClick, ...rest}: Props) =>{
    return <button onClick={onClick} className={`${type==="primary"? styles.primary_btn : styles.secondary_btn} ${styles.btn}`} {...rest} >{children}</button>
}
export default Button;