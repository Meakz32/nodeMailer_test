import express from 'express'
import dotenv from 'dotenv'
import router from './routes/email.js'
dotenv.config()
const app = express()
const port = process.env.PORT

// middleware
app.use(express.json())
app.use("/email/", router)


app.get('/', (req,res)=>{
    res.send("server started")
})

app.listen(port, ()=>{
    console.log("server connected to ", port)
})