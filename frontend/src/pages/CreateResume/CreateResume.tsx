import CreateResumeForm from "../../components/CreateResumeForm/CreateResumeForm";
// import Resume1View from "../../components/Resume1View/Resume1View";
import styles from './CreateResume.module.css';
import profileData from '../../data/resume.json';
import Template1PDF from "../../components/Template1PDF/Template1PDF";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import templates from '../../data/templates.json';
import Template2PDF from "../../components/Template2PDF/Template2PDF";

const CreateResume = () =>{
    return (
        <main className={styles.main_container}>
            {/* <h2>Build your Resume</h2> */}
            <div className={styles.container}>
                <div className={styles.form_container}>
                    <h2>Build Your Resume</h2>
                    <CreateResumeForm/>
                </div>
                {/* <Resume1View resumeData={profileData}/> */}
                <div className={styles.content_container}>
                    <div className={styles.flex}>
                        <h2>Resume Preview</h2>
                        <PDFDownloadLink document={<Template2PDF resumeData={profileData}/>} fileName={profileData.personalData.givenName.replace(" ", "") + "Resume"}>
                            {
                                ({loading})=>loading? 
                                    <Button type="orange">Generating PDF</Button>
                                    :
                                    <Button type="orange">Export PDF</Button>
                            }
                        </PDFDownloadLink>
                    </div>
                    <Carousel carouselImages={templates} nItems={4}/>
                    {/* <PDFViewer showToolbar={false} style={{width:"100%", height:'100%'}}>
                        <Template1PDF resumeData={profileData}/>
                    </PDFViewer> */}
                    <PDFViewer showToolbar={false} style={{width:"100%", height:"100%"}}>
                        <Template2PDF resumeData={profileData}/>
                    </PDFViewer>
                </div>
            </div>
        </main>
    )
}
export default CreateResume;