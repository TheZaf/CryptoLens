import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import path from 'path'

import { connectDb } from './db/db.js'
import authRoutes from './route/user.route.js'
import coinRoutes from './route/coin.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT
const __dirname = path.resolve()

app.use(express.json());
app.use(cookieParser()) 
app.use(express.urlencoded({extended:true}));//parse the req.body
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use("/api/auth",authRoutes)
app.use("/api/coins",coinRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));

    app.get("*splat",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
}

app.listen(PORT,()=>{
    connectDb()
    console.log("server is running on : 5000")
})