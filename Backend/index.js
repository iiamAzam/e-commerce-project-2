const express = require ('express')
const mongoose= require('mongoose')
const envirment=require('dotenv')
const cookie = require('cookie-parser')
const cors = require('cors')
const app=express()
envirment.config()
const port=process.env.PORT||5000
;(
        async function db(){
        mongoose.connect('mongodb://localhost:27017/temp').then(()=>{
                console.log('db is connected')
        }).catch((err)=>{
                console.log(err)
        })
        }
)()
app.use(cookie())
app.use(express.json()) 
app.use(cors())
app.use('/',require('./src/routers/userroute'))
app.listen(port,()=>{
        console.log('the server is running correctly')
})

