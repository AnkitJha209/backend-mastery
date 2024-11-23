import { createTodo } from "../controllers/createTodo.js";
import express from 'express'
import { getTodo } from "../controllers/getTodo.js";
import { getSingleTodo } from "../controllers/getASingleTodo.js";
import { updateTodo } from "../controllers/updateTodo.js";

export const router = express.Router();


// defining api routes
router.post('/createTodo', createTodo)
router.get('/getTodos', getTodo)
router.get('/getTodos/:id', getSingleTodo)
router.put('/updateTodo/:id', updateTodo)


