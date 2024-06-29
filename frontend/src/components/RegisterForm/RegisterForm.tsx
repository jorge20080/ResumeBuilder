import { Form, Link } from 'react-router-dom';
import FormLayout from '../FormLayout/FormLayout';
import styles from '../FormLayout/FormLayout.module.css';

type Props = {
    error?: {message:string, error: boolean}
}
const RegisterForm = ({error}: Props) =>{
    return (
        <FormLayout>
            <Form method='POST' action='/signup' className={styles.auth_form}>
                <span >Welcome to <h2>Build My Resume</h2></span>
                <label>
                    <span>Given Name(s)</span>
                    <input name="givenName"/>
                </label>
                <label>
                    <span>Last Name(s)</span>
                    <input name="lastName"/>
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" name="email"/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" name="password"/>
                </label>
                <label>
                    <span>Confirm Password</span>
                    <input type="password" name="confirmPassword"/>
                </label>
                <label>
                    <span>Phone Number</span>
                    <input type="text" name='phoneNumber'/>
                </label>
                <label>
                    <span>Country</span>
                    <input type="text" name= 'country'/>
                </label>
                <label>
                    <span>City</span>
                    <input type="text" name ="city"/>
                </label>
                
                <p>Have an account already? Click <Link to="/login">here</Link> to Login</p>
                {error?.error && <p className={styles.error}>{error.message}</p>}
                <input type="submit" value="register"/>
            </Form>
        </FormLayout>
    )
}
export default RegisterForm;