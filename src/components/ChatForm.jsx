import React, { useRef } from 'react'

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) =>{
    const inputRef = useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value="";

        //update chat history with user user's message
        setChatHistory(history => [...history, {role: "user", text: userMessage}]);

        //Add a "Thinking..." placeholder for the bot's response
        setTimeout(() => { setChatHistory(history => [...history, {role: "model", text: "Thinking..."}]);
        
        //Call the function and generate the bot's
        generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);},600);

    };
    return (
    <form action='#' className='chat-form' onSubmit={handleFormSubmit}>
        <input ref={inputRef} type='text' placeholder='message...' className='message-input' required />
        <button className="material-symbols-outlined">keyboard_arrow_up</button>
    </form>
    );
};

export default ChatForm
