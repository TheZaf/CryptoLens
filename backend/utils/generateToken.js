import jwt from 'jsonwebtoken'
export const generateToken = (user,res) => {
  const token = jwt.sign({ userId: user },process.env.JWT_SECRET,{
    expiresIn:"3d"
  });

  res.cookie("cookie",token,{
     maxAge:7 * 24 * 60 * 60 * 1000,
     httpOnly:true,
     sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // ← none for production
     secure: process.env.NODE_ENV === 'production' // ← true for production (https)
  })
}

