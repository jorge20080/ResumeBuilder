import { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
    children: ReactNode,
}
const Button = ({children, ...rest}: Props) =>{
    return <button className={styles.primary_btn} {...rest} >{children}</button>
}
export default Button;