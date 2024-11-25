import { User } from "../models/user.models.js";

export const getUsers = async (req, res) => {
    try {
        const getInfo = await User.find({})

        res.status(200).json({
            success: true,
            data: getInfo,
            msg: "Fetched All the User"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Error while handling it"
        })
    }
}