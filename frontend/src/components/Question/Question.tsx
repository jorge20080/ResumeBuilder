import { useState } from 'react';
import { TQuestion } from '../QuestionnaireAccordion/QuestionnaireAccordion';
import styles from './Question.module.css';

type Props = {
    question: TQuestion,
    show: boolean
}
const Question = ({question, show = false}: Props) =>{
    const [showAnswer, setShowAnswer] = useState(show);
    return (
        <li className={styles.question}>
            <a onClick={()=>setShowAnswer(prev=>!prev)}>
                <h3>{question.question}</h3>
            </a>
            {showAnswer && <p>{question.answer}</p>}
            <button onClick={()=>setShowAnswer(prev=>!prev)}>{showAnswer ? '-' : '+'}</button>
        </li>
    )
}
export default Question;