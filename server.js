const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const HUGGINGFACE_API_KEY = 'your_huggingface_read_token'; // Use your Hugging Face read token here

// POST endpoint for processing messages
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        // Send the user message to Hugging Face for inference
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/gpt2', 
            { inputs: userMessage },
            {
                headers: {
                    'Authorization': `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`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Send the generated text back to the frontend
        res.json({ response: response.data[0].generated_text });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error processing request');
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
