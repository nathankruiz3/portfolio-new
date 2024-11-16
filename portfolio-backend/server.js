const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Handle form data here (e.g., send email or log to console)
    console.log(`Message from ${name} (${email}): ${message}`);
    res.status(200).json({ message: 'Message received' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
