import Question from "../Question/Question";
import styles from './QuestionnaireAccordion.module.css';

export type TQuestion = {
    id: number,
    question: string,
    answer: string
}
type Props = {
    questionnaire: TQuestion[]
}
const QuestionnaireAccordion = ({questionnaire}:Props) =>{
    return (
        <>
            <ul className={styles.faq}>
                {questionnaire.map(question=>{
                    return (
                        <Question key={question.id} question={question}/>
                    )
                })}
            </ul>
        </>
    )
}
export default QuestionnaireAccordion;