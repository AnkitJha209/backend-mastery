import express from "express";
import { dummyRoute } from "../controllers/dummyController.js";
import { createComment } from "../controllers/CommentController.js";
import { createPost, getAllPost } from "../controllers/PostController.js";
import { disliked, liked } from "../controllers/LikeController.js";
// importing controllers
export const blogRouters = express.Router();

// mapping all the controllers
blogRouters.get("/dummy-route", dummyRoute);
blogRouters.post("/comment/create", createComment);
blogRouters.post("/post/create-post", createPost);
blogRouters.get("/posts", getAllPost);
blogRouters.post("/likes/liked", liked);
blogRouters.put("/likes/dislike", disliked);
