import { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
    children: ReactNode,
    type?: 'primary'|'secondary'
}
const Button = ({children, type, ...rest}: Props) =>{
    return <button className={`${type==="primary"? styles.primary_btn : styles.secondary_btn} ${styles.btn}`} {...rest} >{children}</button>
}
export default Button;