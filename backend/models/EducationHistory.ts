import { model, Schema } from "mongoose";

const educationHistorySchema = new Schema({
    degree: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

export default model("EducationHistory", educationHistorySchema);