import express from 'express'
import { getAllPosts } from '../controllers/getAllPosts.js';
import { createPost } from '../controllers/createAPost.js';

export const router = express.Router();

router.post('/posts/create-post', createPost)
router.get('/posts', getAllPosts)