import { Post } from "../models/post.models.js";

export const createPost = async (req, res) => {
    try{    
        const {postTitle, postDescription} = req.body;
        const post = await Post.create({postTitle: postTitle, postDescription: postDescription})
        res.status(200).json({
            success: true,
            data: post,
            msg: "Created Successfully"
        })
    }catch(err){
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}