import { ResumeData } from '../../utils/types';
import styles from './Resume1View.module.css';

type Props = {
    resumeData: ResumeData
}
const Resume1View =  ({resumeData}: Props) =>{
    document.title = "Resume " + resumeData.personalData.givenName;
    return (
        <section className={styles.container}>
            <h2>{`${resumeData.personalData.givenName} ${resumeData.personalData.lastName}`}</h2>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="12" width="9" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> {resumeData.personalData.country}, <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"> <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> {resumeData.personalData.phoneNumber}</p>
            <div className={styles.flex}>
                <aside>
                    <article>
                        <h3>Details</h3>
                        <p><svg xmlns="http://www.w3.org/2000/svg" height="12" width="9" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> {resumeData.personalData.country}</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"> <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> {resumeData.personalData.phoneNumber}</p>
                        <a href={`mailTo: ${resumeData.personalData.email}`}>{resumeData.personalData.email}</a>
                    </article>
                    <article>
                        <h3>Links</h3>
                        <ul>
                            {resumeData.profileData.links.map(link=>{
                                return <li key={link.title.toString()}><a href={link.link.toString()} target="_blank">{link.title}</a></li>
                            })}
                        </ul>
                    </article>
                    <article>
                        <h3>Skills</h3>
                        <ul>
                            {resumeData.profileData.skills.map(skill=>{
                                return <li key={skill.toString()}>{skill}</li>
                            })}
                        </ul>
                    </article>
                    <article>
                        <h3>Languages</h3>
                        <ul>
                            {resumeData.profileData.languages.map(languages=>{
                                return <li key={languages.toString()}>{languages}</li>
                            })}
                        </ul>
                    </article>
                </aside>
                <section>
                    <article>
                        <h3><svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg> Profile</h3>
                        <p className={styles.line_map}>
                            {resumeData.profileData.description}
                        </p>
                    </article>
                    {resumeData.profileData.employmentHistory &&
                        <article>
                            <h3> <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"/></svg> Employment History</h3>
                            <ul>
                                {resumeData.profileData.employmentHistory?.map(work=>{
                                    return (
                                        <li className={styles.line_map} key={work.title.toString()}>
                                            <h4>{`${work.title} at ${work.company}, ${work.city}`}</h4>
                                            <p>{`${work.startDate} - ${work.endDate}`}</p>
                                            <h5>Duties</h5>
                                            <ul>
                                                {work.duties.map(duty=>{
                                                    return <li key={duty.toString()}>{duty}</li>
                                                })}
                                            </ul>
                                        </li>
                                    )
                                })}
                            </ul>
                        </article>
                    }
                    {resumeData.profileData.educationHistory &&
                        <article>
                            <h3><svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"/></svg> Education</h3>
                            <ul>
                                {resumeData.profileData.educationHistory?.map(education=>{
                                    return (
                                        <li className={styles.line_map} key={education.startDate.toString()}>
                                            <h4>{`${education.degree}, ${education.institution}, ${education.city}`}</h4>
                                            <p>{`${education.startDate} - ${education.endDate}`}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </article>
                    }
                    {resumeData.profileData.references &&
                        <article>
                        <h3><svg xmlns="http://www.w3.org/2000/svg" height="20" width="25" viewBox="0 0 640 512"><path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"/></svg> References</h3>
                            <ul>
                                {resumeData.profileData.references.map(reference=>{
                                    return (
                                        <li className={styles.line_map} key={reference.contact.phoneNumber.toString()}>
                                            <h4>{`${reference.fullName} from ${reference.placeOfReference}`}</h4>
                                            <p>{reference.contact.email}, {reference.contact.phoneNumber}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </article>
                    }
                </section>
            </div>
        </section>
    )
}
export default Resume1View;