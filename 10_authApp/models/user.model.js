import mongoose, {mongo, Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ["Admin", "Student", "Visitor"]
    }
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)