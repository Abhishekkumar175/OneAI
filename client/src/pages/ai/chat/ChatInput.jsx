import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend({ role: "user", content: text });

    // Fake AI reply (for now)
    setTimeout(() => {
      onSend({
        role: "assistant",
        content: "This is a dummy AI response 🤖",
      });
    }, 600);

    setText("");
  };

  return (
    <div className="border-t bg-[#020617] border-white/10 p-4 flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message ChatGPT..."
        className="flex-1 border border-white/10 rounded-lg px-4 py-2 focus:outline-none"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-5 rounded-lg"
      >
        Send
      </button>
    </div>
  );
}
