const bcrypt= require ('bcrypt')

const userData=require ('../models/user.model')

const jwt = require('jsonwebtoken')

const creatuser=async(req,res)=>{
   
    const { userName, email , password }=req.body
    try{
        const singleobj= await userData.findOne({email})
       
        if (singleobj){
            return res.status(409).json(
                {
                    success:false,
                    message: "email already register"
                }
            )

        }
        var hashed=''
        const hash= await bcrypt.hash(password,10).then((res)=>{
            console.log(`password hashed ${res}`)
            hashed=res
        }

    ).catch ((err)=>console.log(`error in hashing password ${err}`))

        const user= new userData({
            userName,
            email,
            password:hashed

        })
       
        await user.save()
        res.status(201).json({
            success:true,
            message:"user created",
            userNaame:userName,
            email:email,

        })

      }
      catch(err){
            return res.status(500).json({
                success:false,
                message:"somthing went wrong",
                error:err
            }) 
      }

}

const login= async (req,res)=>{
        const {email , password}=req.body
        try{
        const checkemail= await userData.findOne({email})
        if (!checkemail){
            return res.status(404).json({
                success:false,
                message:"email not found"
            })
        }
        const pass = await bcrypt.compare(password,checkemail.password)
        if (!pass){
            return res.status(401).json({
                success: false,
                message: " password in not match "
            })
        }
        
       const token = jwt.sign({id:checkemail._id,email:checkemail.email},'secretkey',{expiresIn:'1h'})



        return res.status(200).json({
            success:true,
            message : "login successful",
            token
        })
    }
    catch(err){
            return res.status(500).json({
                success:false ,
                message:"server error please try again"
            })
    }

}


module.exports={
    creatuser,login
}