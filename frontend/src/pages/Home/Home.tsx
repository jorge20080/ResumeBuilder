import MainHeader from '../../components/MainHeader/MainHeader';
import QuestionnaireAccordion from '../../components/QuestionnaireAccordion/QuestionnaireAccordion';
import styles from './Home.module.css';
import questions from '../../data/questionnaire.json';
import templates from '../../data/templates.json';
import ResumeTemplates from '../../components/ResumeTemplates/ResumeTemplates';

const Home = () =>{
    return (
        <>
            <main>
                <MainHeader />
            </main>
            <section className={styles.section_container}>
                <ResumeTemplates images={templates}/>
            </section>
            <section className={styles.section_container}>
                    <h2>Frequently Asked Questions</h2>
                    <QuestionnaireAccordion questionnaire={questions}/>
            </section>
        </>
    )
}
export default Home;