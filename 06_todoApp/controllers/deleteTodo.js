import { Todo } from "../models/todo.model.js";

export const deleteTodo = async (req, res) => {
    try {
        const id =  req.params.id
        const todo = await Todo.findByIdAndDelete({
            _id : id
        })
        if(!todo){
            res.status(404).json({
                success: "failure",
                msg: "Id not Found"
            })
        }
        res.status(201).json({
            success: true,
            data: todo,
            msg: "Deleted Successfully!!"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}