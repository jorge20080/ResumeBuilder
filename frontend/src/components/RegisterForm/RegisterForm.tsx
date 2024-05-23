import { Link } from 'react-router-dom';
import FormLayout from '../FormLayout/FormLayout';

const RegisterForm = () =>{
    return (
        <FormLayout>
            <form>
                <span >Welcome to <h2>Build My Resume</h2></span>
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
        </FormLayout>
    )
}
export default RegisterForm;