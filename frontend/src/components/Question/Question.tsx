import { useState } from 'react';
import { TQuestion } from '../QuestionnaireAccordion/QuestionnaireAccordion';
import styles from './Question.module.css';

type Props = {
    question: TQuestion
}
const Question = ({question}: Props) =>{
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <li className={styles.question}>
            <h3>{question.question}</h3>
            {showAnswer && <p>{question.answer}</p>}
            <button onClick={()=>setShowAnswer(prev=>!prev)}>{showAnswer ? '-' : '+'}</button>
        </li>
    )
}
export default Question;