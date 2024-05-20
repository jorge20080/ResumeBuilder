import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () =>{
    return (
        <div className={styles.login_form}>
            <form>
                <span className={styles.heading}>Welcome to <h2>Build My Resume</h2></span>
                <label>
                    <span>First Name</span>
                    <input type="text"/>
                </label>
                <label>
                    <span>Last Name</span>
                    <input type="text"/>
                </label>
                <label>
                    <span>Username</span>
                    <input type="text"/>
                </label>
                <label>
                    <span>Email</span>
                    <input type="email"/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password"/>
                </label>
                <label>
                    <span>Repeat Password</span>
                    <input type="password"/>
                </label>
                <p>Have an account already? Click <Link to="login">here</Link> to Login</p>
                <input type="submit" value="register"/>
            </form>
        </div>
    )
}
export default Register;