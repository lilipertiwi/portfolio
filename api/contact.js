export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        // Validate inputs
        if (!name || !email || !subject || !message || !validateEmail(email)) {
            return res.status(400).json({ error: 'Invalid input' });
        }

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        
        // Email options
        const mailOptions = {
            from: email,
            to: 'lili.pertiwi93@gmail.com',
            subject: subject,
            text: `You have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        };

        // Send the email
        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ success: 'Message sent' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
