import AuthenticationLayout from '../../components/AuthenticationLayout/AuthenticationLayout';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';

const Login = () =>{
    return (
        <main className={styles.login_form}>
            <AuthenticationLayout>
                <LoginForm/>
            </AuthenticationLayout>
        </main>
    )
}
export default Login;