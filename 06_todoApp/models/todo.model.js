import mongoose, {Schema} from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        maxLength: 50,
        required: true,
    },
    description: {
        type: String,
        maxLength: 500,
        required: true
    }
},{timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)