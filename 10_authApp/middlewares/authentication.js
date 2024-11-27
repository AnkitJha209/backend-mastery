import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

export const auth = (req, res, next)=>{
    try{
        const token = req.body.token
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "token missing"
            })
        }
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET)
            console.log(payload)
            req.user = payload
            next();
        }catch(err){
            res.status(404).json({
                success: false
            })
        }

    }catch(err){
        res.status(405).json({
            success: false,
            msg: "failed"
        })
    }
}

export const isStudent = (req, res, next) => {
    const {role} = req.user
    if(role !== 'Student'){
        return res.status(402).json({
            success: false,
            msg: 'This route is Protected Route only for Students'
        })
    }
    next();
}


export const isAdmin = (req, res, next) => {
    const {role} = req.user
    if(role !== "Admin"){
        return res.status(400).json({
            success: false,
            msg: "Your are not Admin this route is protected for admins only"
        })
    }
    next();
}