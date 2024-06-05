import { ChangeEvent, useEffect, useState } from 'react';
import { PersonalData } from '../../utils/types';
import { initialPersonalData } from '../CreateResumeForm/CreateResumeForm';
import styles from '../FormLayout/FormLayout.module.css';

type Props = {
    handleProfileDataChange: (data: PersonalData) =>void
}
const AddProfileForm = ({handleProfileDataChange}: Props) =>{
    const [data, setData] = useState<PersonalData>(initialPersonalData);
    useEffect(()=>{
        handleProfileDataChange(data);
    }, [data])
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setData(prev=>{
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    return (
        <fieldset>
            <legend>Personal Information</legend>
            <div className={styles.multiple_inputs}>
                <label>
                    <span>Given Name(s):</span>
                    <input name="givenName" onInput={handleInputChange}/>
                </label>
                <label>
                    <span>Last Name(s):</span>
                    <input name="lastName" onInput={handleInputChange}/>
                </label>
            </div>
            <label>
            <span>Email:</span>
                <input name="email" type="email" onInput={handleInputChange}/>
            </label>
            <div className={styles.multiple_inputs}>
                <label>
                    <span>Phone Number:</span>
                    <input name="phone" onInput={handleInputChange}/>
                </label>
                <label>
                    <span>Country:</span>
                    <input name="country" onInput={handleInputChange}/>
                </label>
            </div>
            <div className={styles.multiple_inputs}>
                <label>
                    <span>City:</span>
                    <input name="city" onInput={handleInputChange}/>
                </label>
            </div>
        </fieldset>
    )
}
export default AddProfileForm;