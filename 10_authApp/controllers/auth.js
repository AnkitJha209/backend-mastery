import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

export const signUp = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    //check if user already exist

    const existingUser = await User.findOne({ email: email });
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
      msg: "Internal Server Error",
    });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        msg: "Please fill all the details",
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(402).json({
        success: false,
        msg: "No User Found",
      });
    }

    //verfiying password and generating JWT token
    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };
    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user = user.toObject();
      user.token = token
      user.password = 'undefined'
      
      const options = {
        expires: new Date( Date.now() + 3* 24 *60 * 60 * 1000),
        httpOnly: true
      }

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        msg: "User Logged in Successfully"
      })
    } else {
      return res.status(404).json({
        success: false,
        msg: "Password does not match",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
