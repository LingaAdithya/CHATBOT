import React from 'react'
import { useState } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';

const App = () => {
  const[chatHistory, setChatHistory] = useState([]);
  const generateBotResponse = (history) =>{
    console.log(history)
  }
  return(
    <div className="container">
      <div className="chatbot-popup">
        {/* Chatbot Header*/}
        <div className="chat-header">
          <div className="header-info">
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button className="material-symbols-outlined">keyboard_arrow_down</button>
        </div>

        {/* Chatbot Body*/}
        <div className='chat-body'>
          <div className="message-bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey There 👋🏻 <br/> How can I help you today!?
            </p>
          </div>
          {/* Render Chat History Dynamically */}
          {chatHistory.map((chat,index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        {/* Chatbot Footer*/}
        <div className='chat-footer'>
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  );
};

export default App
