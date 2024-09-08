import express from 'express'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'

const PORT= process.env.PORT || 3000
const SUB_HOST = process.env.SUB_HOST 

const app = express()
app.get("/",(req,res) => res.status(200).send("hello world pub server"))
app.get("/ping",(req,res) => res.status(200).send("hello"))
app.get("/pub", async (req,res) => {

    let statusCode = 200
    
    try{
        const result = await axios.post(SUB_HOST, {
            body : {
                id : uuidv4(),
                name : "leedonggyu",
                age : 31,
                job : "devops"
            }
        })

        console.log(`Success >> ${result.status}`)

    }catch(e){
        console.error(e)
        statusCode = 500
        // ignore
    }

    return res.status(statusCode).json({})
})

app.listen(PORT,() => console.log(`connect to localhost:${PORT}`))