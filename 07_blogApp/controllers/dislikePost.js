import { Post } from "../models/post.models.js"

export const dislikePost = async ( req, res) => {
        try{
            const id = req.params.id
            console.log(id)
            const post = await Post.findByIdAndUpdate({_id: id},
                {$inc: {postLike: -1}},
                {new: true}
            )
            if(!post){
                res.status(404).json({
                    success: false,
                    msg: "Id Not Found"
                })
            }
            console.log(post)
            res.status(200).json({
                success: true,
                data: post,
                msg: "Disliked"
            })

        }catch(err){
            res.status(500).json({
                success: false,
                msg: `${err}`
            })
        }

}