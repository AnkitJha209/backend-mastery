import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
        maxLength: 10,
    },
    role: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    }
},{timestamps: true})

export const User = mongoose.model("User", userSchema); 