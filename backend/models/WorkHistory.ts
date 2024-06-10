import { model, Schema } from "mongoose";

const workHistorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    startDate:{
        type: String,
        required: true
    },
    endDate:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    }
})

export default model("WorkHistory", workHistorySchema);