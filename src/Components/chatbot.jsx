import { useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { getBotResponse } from "./Api/gemini";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to Sibel Welfare Organization! I'm here to answer your questions about our services, donations, volunteering, orphan care, and more.",
    },
  ]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text,
    };

    // Show user message
    setMessages((prev) => [...prev, userMessage]);

    // Get AI response
    const reply = await getBotResponse(text);

    const botMessage = {
      sender: "bot",
      text: reply,
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">

      {/* Header */}
      <div className="bg-blue-700 text-white px-6 py-5">
        <h1 className="text-2xl font-bold">
          Sibel Welfare AI Chatbot
        </h1>

        <p className="text-sm mt-1 opacity-90">
          Ask anything about Sibel Welfare Organization
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-5 space-y-4">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>

      {/* Input */}
      <ChatInput sendMessage={sendMessage} />

    </div>
  );
}

export default Chatbot;