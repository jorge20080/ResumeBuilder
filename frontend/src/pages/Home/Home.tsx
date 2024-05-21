import MainHeader from '../../components/MainHeader/MainHeader';
import QuestionnaireAccordion from '../../components/QuestionnaireAccordion/QuestionnaireAccordion';
import styles from './Home.module.css';

const templates = [
    "https://img.freepik.com/free-vector/minimalist-cv-template_23-2148902946.jpg?t=st=1715891609~exp=1715895209~hmac=48f2c7edb342289ac91ff00abde19082c4e4ebdad26a25efd4198576f16ae0dd&w=826",
    "https://img.freepik.com/free-vector/flat-design-online-curriculum-vitae_23-2148806601.jpg?t=st=1716226453~exp=1716230053~hmac=949a1b64b78706cd435103a112a6bbf016d256705a5c5ab2bdd4d565800cee73&w=1380",
    "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114272.jpg?t=st=1715891721~exp=1715895321~hmac=1e9e15200643bea69a07a751a0b755a7bec60086ae883996d981e5e2fa82f1f2&w=826",
    "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-113924.jpg?t=st=1715891631~exp=1715895231~hmac=db0cc232906bffecc6f4648343825def8857c0b5813baf520f88c3128a950527&w=826",
    "https://img.freepik.com/free-psd/photo-attachable-resume-template-psd-abstract-design_53876-123388.jpg?t=st=1716224065~exp=1716227665~hmac=49549eb0baa3de08c905069283e51e594838133bad0016726af6337f965169f5&w=900",
    "https://img.freepik.com/free-vector/minimalist-cv-template_23-2148902946.jpg?t=st=1715891609~exp=1715895209~hmac=48f2c7edb342289ac91ff00abde19082c4e4ebdad26a25efd4198576f16ae0dd&w=826",
    "https://img.freepik.com/free-psd/editable-resume-template-psd-abstract-design-with-photo_53876-123386.jpg?t=st=1716223893~exp=1716227493~hmac=e50e020081a915fe944a80c1dfafe6d71c46be77cb3456978e358aefd5a7679f&w=900",
    "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-114272.jpg?t=st=1715891721~exp=1715895321~hmac=1e9e15200643bea69a07a751a0b755a7bec60086ae883996d981e5e2fa82f1f2&w=826",
    "https://img.freepik.com/free-vector/minimal-resume-editable-template-cv-builder-professionals_53876-113924.jpg?t=st=1715891631~exp=1715895231~hmac=db0cc232906bffecc6f4648343825def8857c0b5813baf520f88c3128a950527&w=826",
    "https://img.freepik.com/free-psd/photo-attachable-resume-template-psd-abstract-design_53876-123388.jpg?t=st=1716224065~exp=1716227665~hmac=49549eb0baa3de08c905069283e51e594838133bad0016726af6337f965169f5&w=900"
]
const questions = [
    {
        question: "Can I use ResumeBuilder for free?",
        answer: "a"
    },
    {
        question: "How can I customize my resume?",
        answer: "a"
    },
    {
        question: "Can I download my resume in PDF format?",
        answer: "a"
    },
    {
        question: "How to cancel my account?",
        answer: "a"
    },
    {
        question: "Can I build a cover letter too?",
        answer: "a"
    },
    {
        question: "How to change the language of my Resume?",
        answer: "a"
    },
    {
        question: "Can I add a photo to my Resume?",
        answer: "a"
    },
    {
        question: "How many Resumes can I create?",
        answer: "a"
    }
]
const Home = () =>{
    return (
        <>
            <main>
                <MainHeader images={templates}/>
            </main>
            <section className={styles.faq}>
                <div className={styles.faq_content}>
                    <h2>Frequently Asked Questions</h2>
                    <QuestionnaireAccordion questionnaire={questions}/>
                </div>
            </section>
        </>
    )
}
export default Home;