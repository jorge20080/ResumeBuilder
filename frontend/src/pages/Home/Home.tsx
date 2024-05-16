import MainHeader from '../../components/MainHeader/MainHeader';
import styles from './Home.module.css';

const templates = [
    "https://img.freepik.com/free-psd/editable-resume-template-psd-clean-design_53876-123387.jpg?w=826&t=st=1715891774~exp=1715892374~hmac=34e7dcd384a18f35abca3576f1cfbb8e676fa4c53a5d843d40eb68e882e86c51",

    "https://img.freepik.com/free-vector/minimalist-cv-template_23-2148902946.jpg?t=st=1715891609~exp=1715895209~hmac=48f2c7edb342289ac91ff00abde19082c4e4ebdad26a25efd4198576f16ae0dd&w=826",
    
    "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-113924.jpg?t=st=1715891631~exp=1715895231~hmac=db0cc232906bffecc6f4648343825def8857c0b5813baf520f88c3128a950527&w=826",

    "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114272.jpg?t=st=1715891721~exp=1715895321~hmac=1e9e15200643bea69a07a751a0b755a7bec60086ae883996d981e5e2fa82f1f2&w=826"
    
]
const Home = () =>{
    return (
        <>
            <main>
                <MainHeader/>
            </main>
            <section className={styles.templates}>
                <h2>Templates</h2>
                <ul>
                {templates.map(template=>{
                    return <li>
                        <img src={template} alt="image" />
                    </li>
                })}
                </ul>
            </section>
            <section className={styles.faq}>
                <h2>How to...</h2>
                <ul>
                    <li>Can can I use ResumeBuilder for free?</li>
                    <li>How can I customize my resume?</li>
                    <li>Can I download my resume in Word or PDF format?</li>
                    <li>How to cancel my account?</li>
                </ul>
            </section>
        </>
    )
}
export default Home;