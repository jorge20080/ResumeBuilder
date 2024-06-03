import Button from "../Button/Button";
import styles from './MainHeader.module.css';
import img from '../../assets/MainImage.png'

const MainHeader = () =>{
    return (
        <>
            <header className={styles.header}>
                <div>
                    <h1>The <span className={styles.secondary_color}>#1</span> Free WebSite for Building Professional Resumes</h1>
                    <p>With our platform, you can easily tailor your resume for specific job applications, add sections that showcase your skills, and get tips on optimizing your content to make a lasting impression. </p>
                    <p>Pick professional ready resume templates to impress recruiters. Start building your resumes by either:</p>
                    <div className={styles.btn_container}>
                        <Button type="primary">Login</Button>
                        <Button type="secondary">Sign Up</Button>
                    </div>
                </div>
                <img src={img} alt="" />
            </header>
        </>
    )
}
export default MainHeader;