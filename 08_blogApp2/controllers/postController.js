import { Post } from "../models/post.models.js";
import { Like } from "../models/like.models.js";
import { Comment } from "../models/comment.models.js";

export const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = await Post.create({
      title,
      body,
    });

    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

export const getAllPost = async (req, res) => {
  try {
    const post = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();
    res.status(200).json({
      success: true,
      AllPosts: post,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};
