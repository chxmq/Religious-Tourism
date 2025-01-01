import React, { useState } from 'react';
import './Chatbox.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCzo3hSu77EgLWVQlFmYoyOHnVJaBf9EoY"); // Replace with your actual API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Chatbox = () => {
    const [messages, setMessages] = useState([]); // Empty initial state for messages
    const [input, setInput] = useState('');
    const [started, setStarted] = useState(false); // Track if user has started typing

    // Function to handle sending messages
    const handleSend = async () => {
      if (!input.trim()) return; // Prevent empty messages
   
      const userMessage = {
          sender: "user",
          text: input,
          timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
          }),
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]); // Add user message with timestamp immediately
  
      try {
          const result = await model.generateContent(input); // Fetch the bot's response
          const botText = result.response.text();
  
          // Display bot message step-by-step with a moving cursor
          const botMessage = { sender: "bot", text: "", isTyping: true }; // Include isTyping flag
          setMessages((prevMessages) => [...prevMessages, botMessage]);
  
          for (let i = 0; i <= botText.length; i++) {
              await new Promise((resolve) => setTimeout(resolve, 10)); // Typing effect speed (10ms)
              setMessages((prevMessages) =>
                  prevMessages.map((msg, index) =>
                      index === prevMessages.length - 1
                          ? { ...msg, text: botText.slice(0, i), isTyping: true } // Add cursor
                          : msg
                  )
              );
          }
  
          // Remove cursor and add timestamp after the bot finishes typing
          const timestamp = new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
          });
          setMessages((prevMessages) =>
              prevMessages.map((msg, index) =>
                  index === prevMessages.length - 1
                      ? { ...msg, text: botText, timestamp, isTyping: false } // Finalize bot message
                      : msg
              )
          );
      } catch (error) {
          console.error("Error fetching Gemini API response:", error);
          const botMessage = {
              sender: "bot",
              text: "Sorry, I am unable to process that at the moment.",
          };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
  
      setInput(""); // Clear input field
      setStarted(true);
  };
  

    return (
        <div className="chatbox">
            <div className="chatbox-conversation">
                {messages.map((msg, index) => (
                    <div key={index} className={`chatbox-message ${msg.sender}-message`}>
                        {msg.text}
                        {msg.isTyping && <span className="circular-cursor"></span>} {/* Add cursor */}
                        {msg.timestamp && <span className="timestamp">{msg.timestamp}</span>} {/* Render timestamp */}
                    </div>

                ))}
            </div>
            <div className="chatbox-input">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
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
