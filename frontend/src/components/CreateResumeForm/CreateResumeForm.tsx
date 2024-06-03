import FormLayout from '../FormLayout/FormLayout';
import styles from './CreateResumeForm.module.css';

const CreateResumeForm = () =>{
    return (
        <>
            <FormLayout>
                <form className={styles.form}>
                    <h2>Create your Resume</h2>
                    <h3>Personal Information</h3>
                    <div className={styles.multiple_inputs}>
                        <label>
                            <span>First Name:</span>
                            <input name="firstName" />
                        </label>
                        <label>
                            <span>Last Name:</span>
                            <input name="lastName" />
                        </label>
                    </div>
                    <label>
                    <span>Email:</span>
                        <input name="email" type="email" />
                    </label>
                    <div className={styles.multiple_inputs}>
                        <label>
                            <span>Phone Number:</span>
                            <input name="phone" />
                        </label>
                        <label>
                            <span>Country:</span>
                            <input name="country" />
                        </label>
                    </div>
                    <div className={styles.multiple_inputs}>
                        <label>
                            <span>City:</span>
                            <input name="city" />
                        </label>
                    </div>

                    <h3>Professional Summary</h3>
                    <label>
                        <span>Description:</span>
                        <textarea></textarea>
                    </label>

                    <h3>Education History</h3>
                    <div className={styles.multiple_inputs}>
                        <label>
                            <span>Degree:</span>
                            <input name="degree" />
                        </label>
                        <label>
                            <span>Institution:</span>
                            <input name="institution" />
                        </label>
                    </div>
                    <div className={styles.multiple_inputs}>
                        <label>
                            <span>Start Date:</span>
                            <input name="start" type="date" />
                        </label>
                        <label>
                            <span>End Date:</span>
                            <input name="end" type="date" />
                        </label>
                    </div>
                    <div className={styles.multiple_inputs}>
                        <label>
                            <span>City:</span>
                            <input name="city"/>
                        </label>
                    </div>
                    <label>
                        <span>Description:</span>
                        <textarea></textarea>
                    </label>
                    <button>Add additional Education</button>
                    <h3>Work History</h3>
                    <div className={styles.multiple_inputs}>
                        <label>
                            <span>Degree:</span>
                            <input name="degree" />
                        </label>
                        <label>
                            <span>Institution:</span>
                            <input name="institution" />
                        </label>
                    </div>
                    <div className={styles.multiple_inputs}>
                        <label>
                            <span>Start Date:</span>
                            <input name="start" type="date" />
                        </label>
                        <label>
                            <span>End Date:</span>
                            <input name="end" type="date" />
                        </label>
                    </div>
                    <div className={styles.multiple_inputs}>
                        <label>
                            <span>City:</span>
                            <input name="city"/>
                        </label>
                    </div>
                    <label>
                        <span>Description:</span>
                        <textarea></textarea>
                    </label>
                    <button>Add additional Work</button>
                </form>
            </FormLayout>
        </>
    )
}
export default CreateResumeForm;