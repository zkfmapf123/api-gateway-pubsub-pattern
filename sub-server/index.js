import { ListBucketsCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import express from 'express'

const client = new S3Client({
    region : "ap-northeast-2"
})

const PORT = process.env.PORT || 3001

const app = express()

app.get("/",(req,res) => res.status(200).send("hello world sub server"))
app.get("/ping",(req,res) => res.status(200).send("hello"))
app.post("/sub",(req,res) =>{
   
    console.log(req.body)

    // const command=  new PutObjectCommand({
    //     Bucket  : "donggyu-test-poc"
    //     Key : ""
    // })
    

    return res.status(200).json({})
})

app.listen(PORT,()=>console.log(`connect to localhost:${PORT}`))