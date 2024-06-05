// import styles from '../FormLayout/FormLayout.module.css';

import { ChangeEvent, useEffect, useState } from "react"

type Props = {
    handleProfessionalDataChange: (data:string)=>void
}
const AddProfessionalSummary = ({handleProfessionalDataChange}: Props) =>{
    const [data, setData] = useState("");
    useEffect(()=>{
        handleProfessionalDataChange(data);
    }, [data])
    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setData(e.target.value);
    }
    return(
        <fieldset>
            <legend>Professional Summary</legend>
            <label>
                <span>Description:</span>
                <textarea onInput={handleInputChange}></textarea>
            </label>
        </fieldset>
    )
}
export default AddProfessionalSummary;