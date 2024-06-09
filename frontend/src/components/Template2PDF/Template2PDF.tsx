import { Font, Document, Page, View,StyleSheet, Text, Link } from "@react-pdf/renderer";
import { ResumeData } from "../../utils/types";
import CourierBold from '../../assets/fonts/Roboto/Roboto-Bold.ttf';
import { LocationSvg, PhoneSvg } from "../SVG/SVG";

type Props = {
    resumeData: ResumeData
}
Font.register({
    family: 'ab',
    src: CourierBold,
});
Font.registerHyphenationCallback(word => [word]);
const styles = StyleSheet.create({
    container:{
        fontSize:11,
        backgroundColor:"whitesmoke",
        width:"100%",
        position:"relative",
        paddingHorizontal:"30px",
        paddingVertical:'30px',
        lineHeight:1.3
    },
    header:{
        borderBottom: "1px solid gray",
        marginHorizontal:"30px",
        marginBottom:20,
        color:"gray",
    },
    list:{
        marginHorizontal:20
    },
    h1:{
        fontSize:"25px",
        color:"#555555",
        textTransform:"uppercase",
    },
    h2:{
        fontSize:"16px",
        textTransform:"uppercase",
        width: 130,
    },
    link:{
        color: "gray"
    },
    flex:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        paddingHorizontal:"30px",
        gap: "30px",
        // marginVertical:"30px",
        position: "relative"
    },
    personal:{
        display: 'flex',
        flexDirection:"row",
        gap:"10px",
        flexWrap:"wrap"
    },
    description:{
        width:"100%",
        borderLeft:"1px solid gray",
        paddingLeft:30,
        paddingBottom:10,
        position: "relative"
    },
    bold:{
        fontWeight:"heavy",
        fontFamily: 'ab',
    },
    circle:{
        width:10,
        height:10,
        backgroundColor:"black",
        position:"absolute",
        left:-35.5,
        top:0,
        borderRadius:50
    },
    record:{
        marginBottom:10
    },
    tag_container:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:5,
        marginBottom:10
    },
    tag:{
        padding:"2px 5px",
        backgroundColor:"gainsboro",
    }
})
const Template2PDF = ({resumeData}:Props) =>{
    document.title = "Resume " + resumeData.personalData.givenName;
    return(
        <Document>
            <Page style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.h1} wrap={false}>{`${resumeData.personalData.givenName} ${resumeData.personalData.lastName}`}</Text>
                    <View style={styles.personal}>
                        <PhoneSvg/><Text>226-346-1008</Text>
                        <LocationSvg/><Text>Canada</Text>
                        <Text>jorge20080@hotmail.com</Text>
                        <Link style={styles.link}>Portfolio</Link>
                        <Link style={styles.link}>LinkedIn</Link>
                    </View>
                </View>
                <View>
                    <View style={styles.flex}>
                        <Text style={styles.h2}>Profile</Text>
                        <View style={styles.description}>
                            
                            <View>
                                <Text style={styles.circle}></Text>
                                <Text>{resumeData.profileData.description}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.h2} fixed={true}>Work Experience</Text>
                        <View style={styles.description}>
                            {resumeData.profileData.employmentHistory?.map(work=>{
                                return (
                                    <View style={styles.record}>
                                        <Text style={styles.circle}></Text>
                                        <Text style={styles.bold}>{work.title}</Text>
                                        <Text>{`${work.company} | ${work.startDate} - ${work.endDate}`}</Text>
                                        {work.duties.map(duty=>{
                                            return <Text style={styles.list}>• {duty}</Text>
                                        })}
                                    </View>
                                )
                            })}
                        </View>
                        
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.h2} fixed={true}>Education Background</Text>
                        <View style={styles.description}>
                            {resumeData.profileData.educationHistory?.map(education=>{
                                return (
                                    <View style={styles.record}>
                                        <Text style={styles.circle}></Text>
                                        <Text style={styles.bold}>{education.degree}</Text>
                                        <Text>{`${education.institution} | ${education.startDate} - ${education.endDate}`}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.h2} fixed={true}>Skills</Text>
                        <View style={styles.description}>
                            <View style={styles.tag_container}>
                                <Text style={styles.circle}></Text>
                                {resumeData.profileData.skills?.map(skill=>{
                                    return (
                                        <Text style={styles.tag}>{skill}</Text>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.h2} fixed={true}>References</Text>
                        <View style={styles.description}>
                            {resumeData.profileData.references?.map(reference=>{
                                return (
                                    <View style={styles.record}>
                                        <Text style={styles.circle}></Text>
                                        <Text style={styles.bold}>{reference.fullName} from {reference.placeOfReference}</Text>
                                        <Text>{`${reference.contact.email} | ${reference.contact.phoneNumber}`}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}
export default Template2PDF;