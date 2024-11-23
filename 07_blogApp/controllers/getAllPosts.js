import { Post } from "../models/post.models.js"

export const getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find({})
        if(!posts){
            res.status(404).send("No Data Found")
        }
        res.status(200).json({
            success: true,
            data: posts,
            msg: "All the posts are fetched"
        })

    }catch(err){
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }

}