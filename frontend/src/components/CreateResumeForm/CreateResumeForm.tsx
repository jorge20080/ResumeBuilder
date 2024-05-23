import styles from './CreateResumeForm.module.css';

const CreateResumeForm = () =>{
    return (
        <>
            <form className={styles.form}>
                <h2>Create your Resume</h2>
                <h3>Personal Information</h3>
                <div className={styles.multiple_inputs}>
                    <label>
                        First Name:
                        <input name="firstName" />
                    </label>
                    <label>
                        Last Name:
                        <input name="lastName" />
                    </label>
                </div>
                <label>
                    Email:
                    <input name="email" type="email" />
                </label>
                <div className={styles.multiple_inputs}>
                    <label>
                        Phone Number:
                        <input name="phone" />
                    </label>
                    <label>
                        Country:
                        <input name="country" />
                    </label>
                </div>
                <div className={styles.multiple_inputs}>
                    <label>
                        City:
                        <input name="city" />
                    </label>
                </div>

                <h3>Professional Summary</h3>
                <textarea></textarea>

                <h3>Education History</h3>
                <div className={styles.multiple_inputs}>
                    <label>
                        Degree:
                        <input name="degree" />
                    </label>
                    <label>
                        Institution:
                        <input name="institution" />
                    </label>
                </div>
                <div className={styles.multiple_inputs}>
                    <label>
                        Start Date:
                        <input name="start" type="date" />
                    </label>
                    <label>
                        End Date:
                        <input name="end" type="date" />
                    </label>
                </div>
                <div className={styles.multiple_inputs}>
                    <label>
                        City:
                        <input name="city"/>
                    </label>
                </div>
                <textarea></textarea>
                <button>Add additional Education</button>
                <h3>Work History</h3>
            </form>
        </>
    )
}
export default CreateResumeForm;