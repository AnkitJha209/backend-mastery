import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    postTitle: {
        type: String,
        required: true,
        maxLength: 50,
    },
    postDescription: {
        type: String,
        required: true,
        maxLength: 500,
    },
    postLike: {
        type: Number,
        default: 0
    },
    postComments: [{
        type: String,
        maxLength: 100,
    }]
},{timestamps: true})

export const Post = mongoose.model("Post", postSchema)