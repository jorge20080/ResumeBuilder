import Button from "../Button/Button";
import styles from './MainHeader.module.css';

const MainHeader = () =>{
    return (
        <header className={styles.header}>
            <h1>The <span className={styles.secondary_color}>#1</span> WebSite for building your resumes</h1>
            <p>Pick professional ready resume templates to impress recruiters. Start building your resumes for <span className={styles.secondary_color}>FREE</span> by either:</p>
            <Button type="primary">Login</Button>
            <span> OR </span>
            <Button type="secondary">Sign Up</Button>
        </header>
    )
}
export default MainHeader;