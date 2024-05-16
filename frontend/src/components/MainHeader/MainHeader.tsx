import Button from "../Button/Button";
import styles from './MainHeader.module.css';

const MainHeader = () =>{
    return (
        <header className={styles.header}>
            <h1>The <span className={styles.secondary_color}>#1</span> Site for building your resumes</h1>
            <p>Start building your resumes by either:</p>
            <Button type="primary">Login</Button>
            <span> OR </span>
            <Button type="secondary">Register</Button>
        </header>
    )
}
export default MainHeader;