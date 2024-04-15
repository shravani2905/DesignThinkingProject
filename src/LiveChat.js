import React, { useState } from 'react';

function LiveChat() {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        sender: 'Me',
        text: inputMessage,
      };

      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div style={styles.liveChatContainer}>
      <h1>Live Chat</h1>
      <p>Engage in real-time conversations with fellow residents using our Live Chat feature.</p>

      <div style={styles.messageContainer}>
        {messages.map((message, index) => (
          <div key={index} style={styles.message}>
            <span style={styles.sender}>{message.sender}:</span> {message.text}
          </div>
        ))}
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          style={styles.chatInput}
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  liveChatContainer: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '20px',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  message: {
    marginBottom: '5px',
  },
  sender: {
    fontWeight: 'bold',
    marginRight: '5px',
  },
 
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  chatInput: {
    flex: '1',
    padding: '8px',
    borderRadius: '5px',
    marginRight: '10px',
    border: '1px solid #ccc',
  },
};

export default LiveChat;
