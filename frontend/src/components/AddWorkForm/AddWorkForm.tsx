import { ChangeEvent, useState } from 'react';
import { WorkRecord } from '../../utils/types';
import AddSingleItemForm from '../AddSingleItemForm/AddSingleItemForm';
import { initialWorkRecord } from '../CreateResumeForm/CreateResumeForm';
import styles from '../FormLayout/FormLayout.module.css';
import ShowFormLayout from '../ShowFormLayout/ShowFormLayout';

type Props = {
    handleDataChange: (data: WorkRecord)=>void,
    workRecords: WorkRecord[]
}
const AddWorkForm = ({handleDataChange, workRecords}:Props) =>{
    const [data, setData] = useState(initialWorkRecord);
    const handleSave = ()=>{
        handleDataChange(data);
    }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setData(prev=>{
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    return(
        <fieldset>
            <legend>Work History</legend>
            {workRecords.length>0 &&
                <ul>
                    {
                        workRecords.map(work=>{
                            return <li key={work.startDate.toString()}>{work.title}</li>
                        })
                    }
                </ul>
            }
            <ShowFormLayout addLinkText="Add Work" onSave={handleSave}>
                <div className={styles.multiple_inputs}>
                    <label>
                        <span>Title:</span>
                        <input name="title" onChange={handleInputChange}/>
                    </label>
                    <label>
                        <span>Company:</span>
                        <input name="company" onChange={handleInputChange}/>
                    </label>
                </div>
                <div className={styles.multiple_inputs}>
                    <label>
                        <span>Start Date:</span>
                        <input name="startDate" type="date" onChange={handleInputChange}/>
                    </label>
                    <label>
                        <span>End Date:</span>
                    </label>
                </div>
                <div className={styles.multiple_inputs}>
                    <label>
                        <span>City:</span>
                        <input name="city" onChange={handleInputChange}/>
                    </label>
                </div>
                {/* <AddSingleItemForm text="Reponsibility" handleDataChange={()=>{}}/> */}
            </ShowFormLayout>
        </fieldset>
    )
}
export default AddWorkForm;