import { Like } from "../models/like.models.js";
import { Post } from "../models/post.models.js";

export const liked = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = await Like.create({
      post,
      user,
    });

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: post },
      { $push: { likes: like._id } },
      { new: true }
    )
      .populate("likes")
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

export const disliked = async (req, res) => {
  try {
    const { post, like } = req.body;
    const liked = await Like.findById({ _id: like });

    const updatePost = await Post.findByIdAndUpdate(
      { _id: post },
      { $pull: { likes: liked._id } },
      { new: true }
    )
      .populate("likes")
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      msg: "Disliked Post successfully",
      updatePost,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};
