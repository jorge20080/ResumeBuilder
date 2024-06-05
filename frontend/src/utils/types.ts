export type PersonalData = {
    givenName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    country: String
}
export type PersonalLink = {
    title: String,
    link: String
}
export type WorkRecord = {
    title: String,
    company: String,
    city: String,
    startDate: String,
    endDate: String,
    duties: String[]
}
export type EducationRecord = {
    degree: String,
    institution: String,
    city: String,
    startDate: String,
    endDate: String
}
export type ReferenceRecord = {
    fullName: String,
    placeOfReference: String,
    contact:{
        email:String,
        phoneNumber:String
    }
}
export type ResumeData = {
    personalData: PersonalData
    profileData:{
        description: String,
        links: PersonalLink[],
        skills: String[],
        languages: String[],
        employmentHistory?: WorkRecord[],
        educationHistory?: EducationRecord[],
        references: ReferenceRecord[]
    }
}