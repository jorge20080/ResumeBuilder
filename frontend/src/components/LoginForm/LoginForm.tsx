import { Form, Link } from 'react-router-dom';
import FormLayout from '../FormLayout/FormLayout';
import styles from '../FormLayout/FormLayout.module.css';

type Props = {
    error?: {message:string, error: boolean}
}

const LoginForm = ({error}: Props) =>{
    return (
        <FormLayout>
            <Form method='POST' action='/login' className={styles.auth_form}>
                <span>Welcome to <h2>Build My Resume</h2></span>
                <label>
                    <span>Email</span>
                    <input type="text" name='email'/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" name='password'/>
                </label>
                <p>Forgot your password? Click <Link to="/signup">here</Link></p>
                <p>Don't have an account yet? Click <Link to="/signup">here</Link></p>                    
                {error?.error && <p className={styles.error}>{error.message}</p>}
                <input type="submit" value="login"/>
            </Form>
        </FormLayout>
    )
}
export default LoginForm;