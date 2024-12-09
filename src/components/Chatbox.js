import React, { useState } from 'react';
import axios from 'axios';
import './Chatbox.css'; // Optional CSS for styling


function Chatbox() {
  const [query, setQuery] = useState('');
  const [conversation, setConversation] = useState([]);

  // Function to handle user query
  const handleQuery = async () => {
    if (!query.trim()) return;

    // Add user's query to the conversation
    setConversation((prev) => [...prev, { role: 'user', content: query }]);

    try {
      const response = await axios.post('/api/chatbot/query', { query });

      // Add chatbot's response to the conversation
      setConversation((prev) => [
        ...prev,
        { role: 'bot', content: response.data.reply },
      ]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      setConversation((prev) => [
        ...prev,
        { role: 'bot', content: 'Sorry, something went wrong. Please try again later.' },
      ]);
    }

    // Clear the query input field
    setQuery('');
  };

  return (
    <div className="chatbox">
      <h2>Ask About Religious Tourism</h2>
      <div className="chatbox-conversation">
        {conversation.map((message, index) => (
          <div
            key={index}
            className={`chatbox-message ${
              message.role === 'user' ? 'user-message' : 'bot-message'
            }`}
          >
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your question here..."
        />
        <button onClick={handleQuery}>Send</button>
      </div>
    </div>
  );
}

export default Chatbox;
