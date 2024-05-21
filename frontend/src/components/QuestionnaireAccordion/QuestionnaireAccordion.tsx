import { useState } from "react";
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
    const [showAll, setShowAll] = useState(true);
    return (
        <>
            <a onClick={()=>setShowAll(prev=>!prev)}>{showAll ? 'Hide All' : 'Show All'}</a>
            <ul className={styles.faq}>
                {questionnaire.map(question=>{
                    return (
                        <Question key={question.id} question={question} show={showAll}/>
                    )
                })}
            </ul>
        </>
    )
}
export default QuestionnaireAccordion;