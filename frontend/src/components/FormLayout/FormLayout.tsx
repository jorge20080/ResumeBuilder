import { ReactNode } from 'react';
import styles from './FormLayout.module.css';

type Props = {
    children: ReactNode
}
const FormLayout = ({children}: Props) =>{
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
export default FormLayout;