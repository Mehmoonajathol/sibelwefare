import { useState } from "react";

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    sendMessage(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 p-4 border-t bg-white"
    >
      <input
        type="text"
        placeholder="Ask a question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition duration-300"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;