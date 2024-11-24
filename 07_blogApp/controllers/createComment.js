import { Post } from "../models/post.models.js";

export const createComment = async (req, res) => {
    try{
        const id = req.params.id;
        const {comment} = req.body
        const post = await Post.findByIdAndUpdate({_id: id},
        {$push : {postComments : comment}},
            { new : true}
        )
        if(!post){
            res.status(404).send("Id not Found")
        }

        res.status(201).json({
            success: true,
            data : post,
            msg : "Comment Added Successfully"
        })

    }catch(err){
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}