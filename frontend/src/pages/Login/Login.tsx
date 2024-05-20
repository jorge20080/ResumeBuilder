import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () =>{
    return (
        <div className={styles.login_form}>
            <form>
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
        </div>
    )
}
export default Login;