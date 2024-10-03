import { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper
} from '@mui/material';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', message: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
        sender: 'user1',
        message: input,
      });

      const botMessage = { sender: 'bot', message: response.data[0].text };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput('');
  };

  return (
    <Paper style={{ padding: 20, height: 400, width: '100%', marginTop: 20 }}>
      <List style={{ maxHeight: 350, overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <ListItem
            key={index}
            style={{ justifyContent: msg.sender === 'bot' ? 'flex-start' : 'flex-end' }}
          >
            <ListItemText
              primary={msg.message}
              style={{
                backgroundColor: msg.sender === 'bot' ? '#f0f0f0' : '#007bff',
                color: msg.sender === 'bot' ? '#000' : '#fff',
                borderRadius: 8,
                padding: 10,
              }}
            />
          </ListItem>
        ))}
      </List>
      <div style={{ display: 'flex', marginTop: 10 }}>
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          style={{ marginRight: 10 }}
        />
        <Button variant="contained" color="primary" onClick={sendMessage}>
          Send
        </Button>
      </div>
    </Paper>
  );
};

export default ChatBot;
