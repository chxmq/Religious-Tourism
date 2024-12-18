import React, { useState } from 'react';
import './Chatbox.css'; // Import the CSS file

const Chatbox = () => {
    const [messages, setMessages] = useState([]); // Chat messages
    const [input, setInput] = useState('');
    const [botTyping, setBotTyping] = useState(false); // Show typing indicator

    // Function to handle sending messages
    const handleSend = async () => {
        if (!input.trim()) return; // Prevent empty messages

        const userMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        setInput('');
        setBotTyping(true);

        try {
            // Fetch the content from the text file directly from the public folder
            const response = await fetch(`/${input.toLowerCase().replace(/\s+/g, '-')}.txt`);
            let botResponse = `Sorry, I don't have information about "${input}".`; // Default message

            if (response.ok) {
                botResponse = await response.text(); // Get content from the file
            }

            simulateTyping(botResponse); // Generate typing effect
        } catch (error) {
            console.error('Error fetching the file:', error);
            simulateTyping('Sorry, I am unable to process that at the moment.');
        }
    };

    const simulateTyping = (text) => {
        const words = text.split(' '); // Split the response into words
        let currentText = '';
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < words.length) {
                currentText += words[index] + ' ';
                setMessages((prevMessages) => {
                    const lastMessage = prevMessages[prevMessages.length - 1];
                    if (lastMessage && lastMessage.sender === 'bot') {
                        return [
                            ...prevMessages.slice(0, -1),
                            { sender: 'bot', text: `${currentText.trim()}` }, // Update text
                        ];
                    } else {
                        return [
                            ...prevMessages,
                            { sender: 'bot', text: `${currentText.trim()}` }, // Update text
                        ];
                    }
                });
                index++;
            } else {
                clearInterval(typingInterval); // Stop typing when done
                setBotTyping(false); // End typing indicator
            }
        }, 200); // Adjust delay (in ms) for typing speed
    };

    return (
        <div className="chatbox">
            <div className="chatbox-conversation">
                {messages.map((msg, index) => (
                    <div key={index} className={`chatbox-message ${msg.sender}-message`}>
                        {msg.text}
                        {botTyping && index === messages.length - 1 && (
                            <div className="typing-cursor"></div> // Add the cursor
                        )}
                    </div>
                ))}
            </div>
            <div className="chatbox-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Message Artilect"
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()} // Send on Enter
                />
                <button onClick={handleSend}>
                    <img src="/Send arrow.png" alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default Chatbox;
