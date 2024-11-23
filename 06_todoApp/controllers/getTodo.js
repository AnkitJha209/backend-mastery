import { Todo } from "../models/todo.model.js";

export const getTodo = async (req, res) => {
    try{
        // fetching all the todos
        const todos = await Todo.find({})
        res.status(200).json({
            success: true,
            data: todos,
            msg: "Entire Todo Data is Fetched"
        })
        
    }catch(err){
        console.log(err)
        console.log('Internal Server Error')
        res.status(500).json({
            success: false,
            Error: 'Internal Server Error'
        });
    }
}