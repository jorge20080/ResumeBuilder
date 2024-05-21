import { CarouselImages } from "../../hooks/useCaoursel";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import styles from './MainHeader.module.css';

type Props = {
    images: CarouselImages
}
const MainHeader = ({images}: Props) =>{
    return (
        <>
            <header className={styles.header}>
            <img src="https://img.freepik.com/free-psd/black-white-cv-template_1435-67.jpg?t=st=1716251294~exp=1716254894~hmac=7218258ad7ee99c89830c338909d949ed5fc04bd61df3b6f721568490029608e&w=1480" alt="" />
                <div>
                    {/* <h1>The <span className={styles.secondary_color}>#1</span> Free WebSite Tool for Building your Perfect Resume to Land your Dream Job</h1> */}
                    <h1>The <span className={styles.secondary_color}>#1</span> Free WebSite for Building Resumes</h1>
                    <p>With our platform, you can easily tailor your resume for specific job applications, add sections that showcase your skills, and get tips on optimizing your content to make a lasting impression. Start creating a standout resume today and take the next step towards your dream job.</p>
                    <p>Pick professional ready resume templates to impress recruiters. Start building your resumes by either:</p>
                    <Button type="primary">Login</Button>
                    <span> OR </span>
                    <Button type="secondary">Sign Up</Button>
                </div>
            </header>
            <section className={styles.templates}>
                <h2>Choose a Template for </h2>
                <Carousel carouselImages={images}/>
            </section>
        </>
    )
}
export default MainHeader;