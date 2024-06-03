import { ReactNode } from 'react';
import styles from './AuthenticationLayout.module.css';

type Props = {
    children: ReactNode
}
const AuthenticationLayout = ({children}: Props) =>{
    return (
        <section className={styles.container}>
            <aside>
                <h2>The Best Free Online Resume Builder</h2>
                <p>With our platform, you can easily tailor your resume for specific job applications, add sections that showcase your skills, and get tips on optimizing your content to make a lasting impression. Start creating a standout resume today and take the next step towards your dream job.</p>
            </aside>
            <div className={styles.form_container}>
                {children}
            </div>
        </section>
    )
}
export default AuthenticationLayout;