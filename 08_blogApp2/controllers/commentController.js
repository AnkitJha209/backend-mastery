import { Post } from "../models/post.models.js";
import { Comment } from "../models/comment.models.js";

export const createComment = async (req, res) => {
  try {
    const { post, body, user } = req.body;
    // const comment = await Comment.create({
    //     post, user, body
    // })
    const comment = new Comment({
      post,
      user,
      body,
    });
    const savedComment = await comment.save();

    // finding the post by post id and updating its comments
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: post },
      { $push: { comments: savedComment._id } },
      { new: true }
      // new : true will give the updated document
    )
      .populate("comments")
      .populate("likes")
      .exec(); // populate will give actual document which relates to that id

    res.status(200).json({
      sucsess: true,
      post: updatedPost,
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
