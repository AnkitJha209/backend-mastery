import { Todo } from "../models/todo.model.js";


export const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, description} = req.body
        const todo = Todo.findById({_id : id})
        if(!todo){
            res.status(404).json({
                success: 'Failure',
                msg: "Id not found"
            })
        }
        todo.title = title
        todo.description = description
        res.status(200).json({
            success: true,
            dataUpdated : todo,
            msg: "Data has been Updated"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}