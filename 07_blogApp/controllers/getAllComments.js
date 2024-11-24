import { Post } from "../models/post.models.js";

export const getComments = async (req, res) => {
    try {
        const id = req.params.id
        const {postComments} = await Post.findById({_id: id})
        if(!postComments){
            res.status(404).send("Id not Found")
        }
        res.status(404).json({
            success: true,
            data : postComments,
            msg: "Comments fetched successfully"
        })
        
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}