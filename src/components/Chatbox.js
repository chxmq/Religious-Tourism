import React, { useState } from 'react';
import './Chatbox.css'; // Import the CSS file
import destinations from './data'; // Import the destinations data

const Chatbox = () => {
    const [messages, setMessages] = useState([]); // Empty initial state for messages
    const [input, setInput] = useState('');
    const [started, setStarted] = useState(false); // Track if user has started typing

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        const destinationKey = input.toLowerCase().trim();
        const botResponse = destinations[destinationKey] || "Sorry, I don't have information about that destination.";

        const botMessage = { sender: 'bot', text: botResponse };
        setMessages([...messages, userMessage, botMessage]);

        setInput('');
        setStarted(true); // Mark interaction has started
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
                    placeholder="Message Artilect" // Display placeholder text here
                />
                <button onClick={handleSend}>
                    <img src="/Send arrow.png" alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default Chatbox;
