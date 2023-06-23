import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./ChatInterface.css"; // Import your custom CSS for styling and animations

const API_URL = "https://ai-chat-bot-2ctf.vercel.app/api/input"; // Replace with your API URL

function ChatInterface() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    fetchVoices();
  }, []);

  const fetchVoices = () => {
    const speechSynthesis = window.speechSynthesis;
    if (speechSynthesis && speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => {
        const voices = speechSynthesis.getVoices();
        const japaneseVoices = voices.filter((voice) => voice.lang === "ja-JP");
        if (japaneseVoices.length > 0) {
          setVoice(japaneseVoices[0]);
        }
      };
    }
  };

  const setVoice = (voice) => {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.voice = voice;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (inputMessage.trim() === "") {
      return;
    }

    const newMessage = { content: inputMessage, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");

    try {
      const previousChat = messages.map((message) => message.content);
      const response = await sendChatMessage(inputMessage, previousChat);
      const botReply = response.data.data;
      const botMessage = { content: botReply, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      if (!mute) {
        if (speechSynthesis && speechSynthesis.speaking) {
          speechSynthesis.cancel();
        }
        speakMessage(botReply);
      }
    } catch (error) {
      console.error(error);
      // Handle the error appropriately (e.g., display an error message)
    }
  };

  const sendChatMessage = async (prompt, previousChat) => {
    return axios.post(API_URL, {
      prompt: prompt,
      previousChat: previousChat,
    });
  };

  const speakMessage = (message) => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance);
  };

  const handleNewChat = () => {
    setInputMessage("");
    setMessages([]);
  };

  const handleMuteToggle = () => {
    setMute(!mute);
  };

  return (
    <div className="container chat-interface">
      <h1 className="text-center mb-4">Chat Interface</h1>

      <div className="chat-container">
        <TransitionGroup className="message-list">
          {messages.map(({ content, sender }, index) => (
            <CSSTransition key={index} timeout={300} classNames="message">
              <div className={`message ${sender === "user" ? "user" : "bot"}`}>
                {content}
                {sender === "bot" && (
                  <button className="btn btn-sm btn-primary" onClick={() => speakMessage(content)}>
                    Speak
                  </button>
                )}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      <form onSubmit={handleSendMessage} className="input-form">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
          <button className="btn btn-danger" type="button" onClick={handleNewChat}>
            New Chat
          </button>
          <button className="btn btn-secondary" type="button" onClick={handleMuteToggle}>
            {mute ? "Unmute" : "Mute"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatInterface;
