import { Todo } from "../models/todo.model.js";

export const getSingleTodo = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const todo = await Todo.findById({ _id: id})
        console.log(todo)
        // if(!todo){  
        //     res.status(404).send("Not Found")
        // }
        res.status(200).json({
            success: true,
            data: todo,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error "
        })
    }
}