const jwt = require('jsonwebtoken')

const verfiytoken=(req,res,next)=>{
            const token =req.header['Authorization']
            if (!token){
                return res.status(403).json({
                    succes:false ,
                    message : 'access denied'

                })
            }
            try {
                const decoded = jwt.verify(token, 'secretkey')
                req.user=decoded

            }catch (err){
                return res.status(401).json(
                    {
                        success:false,
                        message:"invalid or expire token"
                    }
                )
            }
           
}

module.exports=verfiytoken