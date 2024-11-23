import { Todo } from "../models/todo.model.js";


export const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, description} = req.body
        const todo = await Todo.findByIdAndUpdate(
            {_id : id},
            {title: title, description: description}
        )
        console.log(todo)
        // if(!todo){
        //     res.status(404).json({
        //         success: 'Failure',
        //         msg: "Id not found"
        //     })
        // }

        res.status(201).json({
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