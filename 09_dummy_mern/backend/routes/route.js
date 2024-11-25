import express from 'express'
import { createUser } from '../controllers/createUser.js';
import { getUsers } from '../controllers/getUser.js';

export const router = express.Router();


router.get('/getUsers', getUsers)
router.post('/createUser', createUser)