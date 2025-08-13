import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Background from './components/Background';
import ChatbotButton from './components/Chatbot/ChatbotButton';
import ChatWindow from './components/Chatbot/ChatWindow';
import Connect from './components/Connect';


const App = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    return (
        <div className="App">
            <Background />
            <Header />
            <main>
                <About />
                <Experience />
                <Projects />
                <ChatbotButton onClick={() => setIsChatOpen(!isChatOpen)} isOpen={isChatOpen} />
                <ChatWindow isOpen={isChatOpen} />
                <Connect />
            </main>
        </div>
    );
};

export default App;
