import mongoose, { model, Schema } from "mongoose";

const profileSchema = new Schema({
    professionalSummary:{
        type: String,
        required: true
    },
    languages:{
        type: [String],
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    links: {
        type: [String],
        required: true
    },
    references: {
        type: [String],
        required: true
    },
    educationHistory:{
        type: mongoose.Types.ObjectId,
        ref:"EducationHistory",
        required: false
    },
    workHistory:{
        type: mongoose.Types.ObjectId,
        ref:"WorkHistory",
        required: false
    }
})
export default model("Profile", profileSchema);