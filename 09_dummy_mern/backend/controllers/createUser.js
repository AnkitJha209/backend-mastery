import { User } from "../models/user.models.js";

export const createUser = async (req, res) => {
    try{
        const {username, email, phoneNo, role, department} = req.body;
        const createdUser = await User.create({
            username,
            email,
            phoneNo,
            role,
            department
        })

        res.status(200).json({
            success: true,
            data: createdUser,
            msg: "User Created"
        })

    }catch(err){
        res.status(500).json({
            success: false,
            msg: "Error Faced"
        })
    }
}