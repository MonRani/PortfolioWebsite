import React from 'react';
import '../../styles/ChatbotButton.css';

// Chat Icon Component
const ChatIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="chat-icon"
    >
        <path
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
            fill="currentColor"
        />
        <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
    </svg>
);

// Close Icon Component
const CloseIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="close-icon"
    >
        <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ChatbotButton = ({ onClick, isOpen }) => {
    return (
        <button
            className={`chatbot-button ${isOpen ? 'open' : ''}`}
            onClick={onClick}
            aria-label={isOpen ? "Close chat" : "Open chat with AI Assistant"}
        >
            {isOpen ? <CloseIcon /> : <ChatIcon />}
        </button>
    );
};

export default ChatbotButton;