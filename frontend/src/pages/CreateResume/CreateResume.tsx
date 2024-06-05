import { useState } from "react";
import CreateResumeForm from "../../components/CreateResumeForm/CreateResumeForm";
import Resume1View from "../../components/Resume1View/Resume1View";
import styles from './CreateResume.module.css';
import profileData from '../../data/resume.json';

const CreateResume = () =>{
    const [title, setTitle] = useState("Jhon Smith");
    const [summary, setSummary] = useState("Default Summary");


    return (
        <main className={styles.container}>
            <div className={styles.form_container}>
                <CreateResumeForm/>
            </div>
            <Resume1View resumeData={profileData}/>
        </main>
    )
}
export default CreateResume;