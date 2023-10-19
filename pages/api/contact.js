import nodemailer from "nodemailer";

export default async function handler(req, res) {
    const {name, email, message} = req.body
    console.log(name)
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.APP_NEXT_PUBLIC_PASSWORD
        }
    })

    const mailOptions = {
        from: `"${name}" ${process.env.NEXT_PUBLIC_EMAIL}`,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: `PORTFOLIO MAIL FROM: ${name}`,
        html: `
        Name: ${name} <br>
        Email: ${email} <br>
        Message: ${message} <br>
        `,
    }


    try {
        await transport.sendMail(mailOptions)
        res.status(200).end()
    } catch (e) {
        res.status(500).end()
    }


}