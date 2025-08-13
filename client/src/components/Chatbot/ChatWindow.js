import React, { useState, useRef, useEffect } from 'react';
import '../../styles/ChatWindow.css';

const ChatWindow = ({ isOpen }) => {
    const [messages, setMessages] = useState([
        {
            text: "👋 Hi! I'm Monisha's AI assistant. I can tell you about her experience, skills, projects, or anything else you'd like to know. How can I help you today?",
            sender: 'bot'
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    // Function to format the bot's response text
    const formatMessage = (text) => {
        // Convert markdown-style formatting to HTML
        let formatted = text
            // Bold text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Bullet points
            .replace(/^• (.+)$/gm, '<li>$1</li>')
            // Headers (simple approach for **Header**)
            .replace(/^\*\*([^*]+)\*\*$/gm, '<h4>$1</h4>')
            // Line breaks - convert double newlines to paragraph breaks
            .replace(/\n\n/g, '</p><p>')
            // Single newlines to breaks
            .replace(/\n/g, '<br>');

        // Wrap in paragraphs
        formatted = '<p>' + formatted + '</p>';

        // Clean up list formatting
        formatted = formatted.replace(/<p><li>/g, '<ul><li>');
        formatted = formatted.replace(/<\/li><\/p>/g, '</li></ul>');
        formatted = formatted.replace(/<\/li><br><li>/g, '</li><li>');
        formatted = formatted.replace(/<br><li>/g, '<li>');

        // Clean up headers
        formatted = formatted.replace(/<p><h4>/g, '<h4>');
        formatted = formatted.replace(/<\/h4><\/p>/g, '</h4>');
        formatted = formatted.replace(/<br><h4>/g, '<h4>');

        // Clean up empty paragraphs
        formatted = formatted.replace(/<p><\/p>/g, '');
        formatted = formatted.replace(/<p><br><\/p>/g, '');
        formatted = formatted.replace(/<p>\s*<\/p>/g, '');

        return formatted;
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        try {
            const response = await fetch('http://127.0.0.1:8000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input })
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.detail || 'Network response was not ok');
            }

            setMessages(prev => [...prev, {
                text: data.response,
                sender: 'bot'
            }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                text: error.message,
                sender: 'bot'
            }]);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    if (!isOpen) return null;

    return (
        <div className="chat-window">
            <div className="chat-messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`message ${msg.sender}`}>
                        {msg.sender === 'bot' ? (
                            <div dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }} />
                        ) : (
                            msg.text
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={sendMessage} className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatWindow;