import { createTodo } from "../controllers/createTodo.js";
import express from 'express'

export const router = express.Router();


// defining api routes
router.post('/createTodo', createTodo)


