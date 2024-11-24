import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    user: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
