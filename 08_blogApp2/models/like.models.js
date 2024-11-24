import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Like = mongoose.model("Like", likeSchema);
