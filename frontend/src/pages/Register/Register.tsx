import AuthenticationLayout from '../../components/AuthenticationLayout/AuthenticationLayout';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import styles from './Register.module.css';

const Register = () =>{
    return (
        <main className={styles.register_form}>
            <AuthenticationLayout>
                <RegisterForm/>
            </AuthenticationLayout>
        </main>
    )
}
export default Register;