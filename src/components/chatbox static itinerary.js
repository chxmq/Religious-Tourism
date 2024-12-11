import React, { useState } from 'react';
import './Chatbox.css'; // Import the CSS file

const Chatbox = () => {
    const [messages, setMessages] = useState([]); // Empty initial state for messages
    const [input, setInput] = useState('');

    // Function to handle sending messages
    const handleSend = async () => {
        if (!input.trim()) return; // Prevent empty messages

        const userMessage = { sender: 'user', text: input };

        try {
            // Fetch the content from the text file directly from the public folder
            const response = await fetch(`/${input.toLowerCase().replace(/\s+/g, '-')}.txt`);

            let botMessage = { sender: 'bot', text: 'Sorry, I am unable to process that at the moment.' }; // Default message

            if (response.ok) {
                // If the file is found, read its content
                const text = await response.text();
                botMessage = { sender: 'bot', text: text };
            } else {
                // If the file is not found, show a default error message
                botMessage = { sender: 'bot', text: `Sorry, I don't have information about "${input}".` };
            }

            // Update the state with both user and bot messages in a single call
            setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);

        } catch (error) {
            console.error('Error fetching the file:', error);
            const botMessage = { sender: 'bot', text: 'Sorry, I am unable to process that at the moment.' };
            setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
        }

        // Clear the input field
        setInput('');
    };

    // Function to handle Enter key press
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default newline behavior
            handleSend();
        }
    };

    return (
        <div className="chatbox">
            <div className="chatbox-conversation">
                {messages.map((msg, index) => (
                    <div key={index} className={`chatbox-message ${msg.sender}-message`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chatbox-input">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={handleKeyPress} // Add keydown listener
                    placeholder="Message Artilect"
                />
                <button onClick={handleSend}>
                    <img src="/Send arrow.png" alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default Chatbox;
