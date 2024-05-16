import Button from '../../components/Button/Button';
import styles from './Home.module.css';

const Home = () =>{
    return (
        <>
            <main>
                <header className={styles.header}>
                    <h1>The <span className={styles.secondary_color}>#1</span> Site for building your resumes</h1>
                    <p>Start building your resumes by logging in:</p>
                    <Button>Login</Button>
                </header>
            </main>
        </>
    )
}
export default Home;