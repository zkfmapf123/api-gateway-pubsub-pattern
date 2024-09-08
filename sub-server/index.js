import { ListBucketsCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import express from 'express'

const client = new S3Client({
    region : "ap-northeast-2"
})

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())

app.get("/",(req,res) => res.status(200).send("hello world sub server"))
app.get("/ping",(req,res) => res.status(200).send("hello"))
app.post("/sub",async (req,res) =>{
   
    console.log("body : ",  JSON.stringify(req, null, 2))

    const {id} = req
    try{
        const command=  new PutObjectCommand({
            Bucket  : "donggyu-test-poc",
            Key : `${id}-sqs.txt`,
            Body : JSON.stringify(req)
        })

        const result = await client.send(command)
        console.log("result >> ", result)
    }catch(e) {
        console.error(e)
        // ignore
    }

    return res.status(200).json({})
})

app.listen(PORT,()=>console.log(`connect to localhost:${PORT}`))