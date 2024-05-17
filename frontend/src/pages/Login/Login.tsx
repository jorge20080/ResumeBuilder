import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () =>{
    return (
        <div className={styles.login_form}>
            <form>
                <h2>Login</h2>
                <label>
                    Username
                    <input type="text" />
                </label>
                <label>
                    Password
                    <input type="password" />
                </label>
                <p>Forgot your password? Click <Link to="signup">here</Link></p>
                <p>Don't have an account yet? Click <Link to="signup">here</Link></p>
                <input type="submit" value="login"/>
            </form>
        </div>
    )
}
export default Login;