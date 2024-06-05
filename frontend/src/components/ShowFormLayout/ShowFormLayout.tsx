import { ReactNode, useState } from "react";
import styles from '../../components/FormLayout/FormLayout.module.css';

type Props ={
    children: ReactNode,
    addLinkText: String,
    onSave: ()=>void
}
const ShowFormLayout = ({children, addLinkText, onSave}: Props) =>{
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            {showForm && 
            <>
                {children}
                <div className={styles.btn_container}>
                    <button onClick={onSave} type="button">Save</button>
                    <button>Cancel</button>
                </div>
            </>
            }
            {!showForm && <a onClick={()=>setShowForm(prev=>!prev)}>{addLinkText}</a>}
        </>
    )
}
export default ShowFormLayout;