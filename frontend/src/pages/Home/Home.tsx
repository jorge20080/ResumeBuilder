import MainHeader from '../../components/MainHeader/MainHeader';
import QuestionnaireAccordion from '../../components/QuestionnaireAccordion/QuestionnaireAccordion';
import styles from './Home.module.css';
import questions from '../../data/questionnaire.json';
import templates from '../../data/templates.json';

const Home = () =>{
    return (
        <>
            <main>
                <MainHeader images={templates}/>
            </main>
            <section className={styles.faq_container}>
                    <h2>Frequently Asked Questions</h2>
                    <QuestionnaireAccordion questionnaire={questions}/>
            </section>
        </>
    )
}
export default Home;