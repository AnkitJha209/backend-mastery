import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    //check if user already exist

    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
        return res.status(404).json({
            success: false,
            msg: "User Already Exist",
        });
    }
    let hashPassword;
    try {
      hashPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      res.status(500).json({
        success: false,
        msg: "Error in Hashing Password",
      });
    }

    const user = await User.create({
      username,
      email,
      password: hashPassword,
      role,
    });

    res.status(200).json({
      success: true,
      msg: "User Created",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
        success: false,
        msg: "Internal Server Error"
    })
  }
};

export const logIn = async (req, res) => {

};
