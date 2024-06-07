import {Document, Text, Page, View,Link , Font} from '@react-pdf/renderer';
import { ResumeData } from "../../utils/types";
import { styles } from "./styles";
import CourierBold from '../../assets/fonts/Roboto/Roboto-Bold.ttf';
import { UserSvg, LocationSvg, OfficeSvg, PhoneSvg } from '../SVG/SVG';

type Props = {
    resumeData: ResumeData
}
Font.register({
    family: 'ab',
    src: CourierBold,
});
const Template1PDF = ({resumeData}:Props) =>{
    document.title = "Resume " + resumeData.personalData.givenName;
    return <Document>
        <Page style={styles.container} size="A4">
                <View style={styles.header}>
                    <Text style={styles.h1}>{`${resumeData.personalData.givenName} ${resumeData.personalData.lastName}`}</Text>
                    <View style={[styles.flex, styles.secondaryTitle]}>
                        <LocationSvg/>
                        <Text style={styles.smallText}>&nbsp;{resumeData.personalData.country},&nbsp;</Text>
                        <PhoneSvg/>
                        <Text style={styles.smallText}>&nbsp;{resumeData.personalData.phoneNumber}</Text>
                    </View>
                </View>
                <View style={styles.page}>
                    <View style={styles.aside}>
                        <Text style={styles.h2}>Details</Text>
                        <View style={styles.flex}>
                            <LocationSvg/>
                            <Text style={styles.smallText}>&nbsp;{resumeData.personalData.country}</Text>
                        </View>
                        <View style={styles.flex}>
                            <PhoneSvg/>
                            <Text style={styles.smallText}>&nbsp;{resumeData.personalData.phoneNumber}</Text>
                        </View>
                        <Text style={styles.smallText}>{resumeData.personalData.email}</Text>
                        <Text style={styles.h2}>Links</Text>
                        {resumeData.profileData.links.map(link=>{
                            return <Text style={ [styles.list,styles.listPadding]}>• <Link style={[styles.smallText, styles.link]} href={link.link.toString()}>{link.title}</Link></Text>
                        })}
                        <Text style={styles.h2}>Skills</Text>
                        {resumeData.profileData.skills.map(skill=>{
                            return <Text style={ [styles.list,styles.listPadding]}>• <Text style={styles.smallText} >{skill}</Text></Text>
                        })}                
                    </View>
                    <View style={styles.main}>
                        <View style={styles.flex}>
                            <UserSvg/>
                            <Text style={styles.h2}>&nbsp;Profile</Text>
                        </View>
                        <Text style={[styles.smallText, styles.section, styles.p]}>
                        I am a professional on the IT field, able to adapt to different environments and work under pressure. Love working as a team in a way to achieve the goals of the company, always following the strategies and guidelines provided by the organization. During my
                        professional career I have been able to develop mostly in the QA field where I have gone
                        from some basic manual testing to some advanced automated testing. I have over 6 years
                        of experience in software quality assurance.
                        </Text>

                        <View style={styles.flex}>
                            <OfficeSvg/>
                            <Text style={styles.h2}>&nbsp;Employment History</Text>
                        </View>
                        {resumeData.profileData.employmentHistory?.map(work=>{
                            return (
                                <View style={styles.section}>
                                    <Text style={styles.bullet}></Text>
                                    <Text style={styles.h3}>{`${work.title} at ${work.company}, ${work.city}`}</Text>
                                    <Text style={styles.smallText}>{`${work.startDate} - ${work.endDate}`}</Text>
                                    <Text style={styles.h4}>Duties</Text>
                                    <View style={styles.p}>
                                        {work.duties.map(duty=>{
                                            return (
                                                <Text style={ styles.list}>• <Text style={styles.smallText}>{duty}</Text></Text>
                                            )                                       
                                        })}
                                    </View>
                                </View>
                            )
                        })}
                        
                    </View>
                </View>
            
        </Page>
    </Document>
}
export default Template1PDF;