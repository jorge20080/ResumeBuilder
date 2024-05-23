import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = () =>{
    return (
        <form className={styles.form_container}>
            <span className={styles.heading}>Welcome to <h2>Build My Resume</h2></span>
            <label>
                <span>Username</span>
                <input type="text"/>
            </label>
            <label>
                <span>Password</span>
                <input type="password"/>
            </label>
            <p>Forgot your password? Click <Link to="signup">here</Link></p>
            <p>Don't have an account yet? Click <Link to="signup">here</Link></p>                    
            <input type="submit" value="login"/>
        </form>
    )
}
export default LoginForm;