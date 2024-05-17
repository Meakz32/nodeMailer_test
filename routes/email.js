import express from 'express'
import {log} from 'console'
import nodemailer from 'nodemailer'
// import dotenv from 'dotenv'
// dotenv.config()

const router = express.Router()

router.post('/email/send', async (req, res)=>{
    try {
        let transporter = nodemailer.createTransport({
            service : "gmail",
            auth : {
                user : process.env.NODEMAILER_USER,
                pass : process.env.NODEMAILER_PASS
            }
        })
        try {
            await transporter.sendMail({
                from: process.env.NODEMAILER_USER,
                to: process.env.SENT_TO,
                subject: req.body.subject,
                text: req.body.text
            })
        } catch (err) {
            return console.log("error occured in sendMail func.", err)
        }

        res.send("Email send success").status(200)

    } catch (error) {
        log("error detected :", error)
    }
})

export default router