import express from 'express'
import { getAllPosts } from '../controllers/getAllPosts.js';
import { createPost } from '../controllers/createAPost.js';
import { likePost } from '../controllers/likePost.js';
import { dislikePost } from '../controllers/dislikePost.js';

export const router = express.Router();

router.post('/posts/create-post', createPost)
router.get('/posts', getAllPosts)
router.put('/posts/post/like-post/:id', likePost)
router.put('/posts/post/dislike-post/:id', dislikePost)