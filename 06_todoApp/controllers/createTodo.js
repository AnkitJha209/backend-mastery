import { Todo } from "../models/todo.model.js";


// defining router handler



export const createTodo = async (req, res) => {
    try{
        // extracting title and description from request body
        const {title, description} = req.body
        // create an object and insert it in db
        const response = await Todo.create({title, description});
        // send a json response with a success flag
        res.status(201).json(
            {
                success: true,
                data: response,
                msg: "Entry Created Successfully"
            }
        )
    }
    catch(err){
        console.log("Error can not create todo")
        res.status(500).json({
            success: false,
            data: "Internal Server error",
            msg: "Entry not Created Please Try Again!!!!!"
        })
    }
}