import { redirect, useActionData } from 'react-router-dom';
import AuthenticationLayout from '../../components/AuthenticationLayout/AuthenticationLayout';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import styles from './Register.module.css';

const Register = () =>{
    const errorData = useActionData() as {message:string, error:boolean}|undefined;
    return (
        <main className={styles.register_form}>
            <AuthenticationLayout>
                <>
                    {errorData? <RegisterForm error={errorData}/>: <RegisterForm />}                
                </>
            </AuthenticationLayout>
        </main>
    )
}
export default Register;


export const action = async({request}:{request:Request}) =>{
    const data = await request.formData();
    const reqData = {
        givenName: data.get("givenName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
        confirmPassword: data.get("confirmPassword"),
        phoneNumber: data.get("phoneNumber"),
        country: data.get("country"),
        city: data.get("city"),
    }
    const response = await fetch("http://localhost:3000/api/auth", {
        method:"POST",
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(reqData)
    })
    if(response.ok){
        localStorage.setItem("isLogged", JSON.stringify(true));
        return redirect('/login');
    }
    if(!response.ok){
        localStorage.setItem("isLogged", JSON.stringify(false));
        const res =  await response.json();
        return {...res, error: true}
    }
    return response;
}