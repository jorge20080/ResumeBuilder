import { useActionData, useNavigate } from 'react-router-dom';
import AuthenticationLayout from '../../components/AuthenticationLayout/AuthenticationLayout';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useAuthContext } from '../../context/auth-context';
import { login } from '../../utils/auth';
import styles from './Login.module.css';

type ErrorResponse = {
    message:string, 
    error:true
}
type SuccessfullResponse = {
    error:false
    message:string, 
    userId:string,
    token:string
}
type ResponseData = ErrorResponse | SuccessfullResponse | undefined

const Login = () =>{
    const navigate = useNavigate();
    const data = useActionData() as ResponseData;
    const {handleLogin} = useAuthContext();
    
    if(data && !data?.error){
        handleLogin(data?.token);
        navigate('/buildresume');
    }
    return (
        <main className={styles.login_form}>
            <AuthenticationLayout>
                <>
                    {data?.error? <LoginForm error={data}/>: <LoginForm />}                
                </>
            </AuthenticationLayout>
        </main>
    )
}
export default Login;

export const action = async({request}: {request:Request}) =>{
    const formData = await request.formData();
    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }
    const response = await fetch('http://localhost:3000/api/auth/login', {
        method:"post",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const responseData = await response.json();
    if(response.ok && response.status===200) {
        login(responseData.token);        
        return {...responseData, error: false};
    }
    if(response.status !==200){
        localStorage.removeItem("token");
        return {...responseData, error: true}
    }
}