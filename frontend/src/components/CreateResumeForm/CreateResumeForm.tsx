import { useState } from 'react';
import { EducationRecord, PersonalData, WorkRecord } from '../../utils/types';
import AddEducationForm from '../AddEducationForm/AddEducationForm';
import AddProfessionalSummary from '../AddProfessionalSummary/AddProfessionalSummary';
import AddProfileForm from '../AddProfileForm/AddProfileForm';
import AddSingleItemForm from '../AddSingleItemForm/AddSingleItemForm';
import AddWorkForm from '../AddWorkForm/AddWorkForm';
import FormLayout from '../FormLayout/FormLayout';
import styles from './CreateResumeForm.module.css';


enum SectionType {
    Education,
    Work,
    Skill,
    Language,
    Link,
    Reference
}
export const initialPersonalData:PersonalData = {
    givenName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    country: ""
}
export const initialWorkRecord: WorkRecord ={
    title: "",
    company: "",
    city: "",
    startDate: "",
    endDate: "",
    duties: []
}
const CreateResumeForm = () =>{
    const [personalData, setPersonalData] = useState<PersonalData>(initialPersonalData);
    const [professionalData, setProfessionalData] = useState("");
    const [languages, setLanguages] = useState<string[]>([]);
    const [educationRecords, setEducationRecords] = useState<EducationRecord[]>([]);
    const [workRecords, setWorkRecords] = useState<WorkRecord[]>([]);

    const handlePersonalData = (data: PersonalData) =>{
        setPersonalData(data);
    }
    const handleProfessionalData = (data:string) =>{
        setProfessionalData(data)
    }
    const handleLanguagesData = (data:string)=>{
        setLanguages(prev=>[...prev, data]);
    }
    const handleEducationData = (data: EducationRecord)=>{
        setEducationRecords(prev=>{
            return [...prev, data]
        })
    }
    const handleWorkData = (data: WorkRecord)=>{
        setWorkRecords(prev=>{
            return [...prev, data]
        })
    }
    return (
        <>
            <FormLayout>
            <h2>Build your Resume</h2>
                <form className={styles.form}>
                    <AddProfileForm handleProfileDataChange={handlePersonalData}/>
                    <AddProfessionalSummary handleProfessionalDataChange ={handleProfessionalData}/>
                    <AddSingleItemForm text="Language" handleDataChange={handleLanguagesData} values={languages}/>
                    <AddEducationForm handleDataChange={handleEducationData}/>
                    <AddWorkForm handleDataChange={handleWorkData}/>
                    {/* <AddSingleItemForm text="Skill" handleDataChange={()=>{}}/>
                    <AddSingleItemForm text="Link" handleDataChange={()=>{}}/>
                    <AddSingleItemForm text="Reference" handleDataChange={()=>{}}/> */}
                    <input type="submit" value="Save"/>
                </form>
            </FormLayout>
        </>
    )
}
export default CreateResumeForm;