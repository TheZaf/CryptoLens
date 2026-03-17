import {User} from '../model/user.model.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../utils/generateToken.js';

export const signUp = async(req,res) =>{
    try {
        const {username,email,password} = req.body;
        if(!username || !email || !password){
          return res.status(400).json({message:"all fields are requried!"})
        }
        const existUser = await User.findOne({username});
        if(existUser) return res.status(400).json({message:"user already exist"})
        
        const existEmail = await User.findOne({email});
        if(existEmail) return res.status(400).json({message:"email already exist"}) 
         
        if(password.length < 6) return res.status(400).json({message:"password should be morethan 6 characters"})    

        const salt = await bcrypt.genSalt(10)   
        const hashedPassword = await bcrypt.hash(password,salt) 
        
        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })

        await newUser.save()

        generateToken(newUser._id,res)
        
        res.status(200).json({
             message:"user created successfully",
        user:{
            ...newUser._doc,
            password:"",
        },
        })
    
    } catch (error) {
        console.log("error in signing up :",error)
        res.status(500).json({message:"internal server error"})
    }
}
export const logIn = async(req,res) =>{
    try {
        const{email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"all fields are required!"})  
        }
        const existUser = await User.findOne({email});
        if(!existUser) return res.status(400).json({message:"invalid user"})
        
        const isMatch = await bcrypt.compare(password,existUser.password)    
        if(!isMatch) return res.status(400).json({message:"invalid credentials"})

        generateToken(existUser._id,res)    

        res.status(200).json({
            message:"logged in successfully",
            user:{
                ...existUser._doc,
                password:'',
            },
        })    
    } catch (error) {
        console.log("error in logging in :",error)
        res.status(500).json({message:"Internal server error"})
    }
}
export const logOut = async(req,res) =>{
    try {
        res.clearCookie("cookie")
        res.status(200).json({message:"Logged Out Successfully"})
    } catch (error) {
        console.log("error in logging out",error)
        res.status(500).json({message:"Internal server error"})
    }
}
export const authCheck = async(req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password")
        res.status(200).json({ success: true, user: user })
    } catch (error) {
        console.log("error in checking auth", error);
        res.status(500).json({ message: "internal server error" })
    }
}