import { useState, useRef, useEffect } from "react";
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

  const [loading, setLoading] = useState(false);

  // Latest message ke liye reference
  const bottomRef = useRef(null);

  // Har new message ya loading par automatically neeche scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;

    const userMessage = {
      sender: "user",
      text: text,
    };

    // User message show karo
    setMessages((prev) => [...prev, userMessage]);

    // Three dots show karo
    setLoading(true);

    try {
      // Gemini se response
      const reply = await getBotResponse(text);

      // Dots ko thori der visible rakho
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const botMessage = {
        sender: "bot",
        text: reply,
      };

      // Bot response show karo
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Chatbot Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry! Something went wrong.",
        },
      ]);

    } finally {
      setLoading(false);
    }
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
          <Message
            key={index}
            message={message}
          />
        ))}


        {/* Three dots */}
        {loading && (
          <div className="flex justify-start">

            <div className="bg-white px-5 py-4 rounded-2xl shadow-md flex items-center gap-2">

              <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></span>

              <span
                className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></span>

              <span
                className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></span>

            </div>

          </div>
        )}

        {/* ⭐ Auto scroll point */}
        <div ref={bottomRef}></div>

      </div>


      {/* Input */}
      <ChatInput sendMessage={sendMessage} />

    </div>
  );
}

export default Chatbot;