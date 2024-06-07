import { ChangeEvent, useState } from 'react';
import { EducationRecord } from '../../utils/types';
import styles from '../FormLayout/FormLayout.module.css';
import ShowFormLayout from '../ShowFormLayout/ShowFormLayout';

export const initialEducation:EducationRecord = {
    degree: "",
    institution: "",
    city: "",
    startDate: "",
    endDate: ""
}
type Props = {
    handleDataChange: (data: EducationRecord)=>void,
    educationRecords: EducationRecord[]
}
const AddEducationForm = ({handleDataChange, educationRecords}: Props) =>{
    const [data, setData] = useState(initialEducation);
    const handleSave = ()=>{
        handleDataChange(data);
    }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setData(prev=>{
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    return (
        <fieldset>
            <legend>Education History</legend>
            {educationRecords.length>0 &&
                <ul>
                    {
                        educationRecords.map(education=>{
                            return <li key={education.startDate.toString()}>{education.degree}</li>
                        })
                    }
                </ul>
            }
            <ShowFormLayout addLinkText="Add Education" onSave={handleSave}>
                <div className={styles.multiple_inputs}>
                    <label>
                        <span>Degree:</span>
                        <input name="degree" onChange={handleInputChange}/>
                    </label>
                    <label>
                        <span>Institution:</span>
                        <input name="institution" onChange={handleInputChange}/>
                    </label>
                </div>
                <div className={styles.multiple_inputs}>
                    <label>
                        <span>Start Date:</span>
                        <input name="startDate" type="date" onChange={handleInputChange}/>
                    </label>
                    <label>
                        <span>End Date:</span>
                        <input name="endDate" type="date" onChange={handleInputChange}/>
                    </label>
                </div>
                <label>
                    <span>City:</span>
                    <input name='city' onChange={handleInputChange} />
                </label>
            </ShowFormLayout>
        </fieldset>
    )
}
export default AddEducationForm;