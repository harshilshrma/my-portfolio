// api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;
        console.log(formData); 
        
        const { firstName, lastName, email, interest, message } = req.body;

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'harshilsharma.dev@gmail.com',
                pass: 'Harshil@Aayushi4711',
            },
        }); 

        // Email content
        const mailOptions = {
            from: 'harshilsharma.dev@gmail.com',
            to: 'harshilsharma.dev@gmail.com',
            subject: 'New Contact Form Submission from Portfolio',
            html: `
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Interest:</strong> ${interest}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        try {
            // Send email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Something went wrong.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
