export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.length === 0 && (
        <p className="text-center text-gray-400">
          Start a conversation 🚀
        </p>
      )}

      {messages.map((msg, index) => (
        <div
          key={index}
          className={`max-w-xl px-4 py-2 rounded-lg ${
            msg.role === "user"
              ? "ml-auto bg-gray-800 text-white"
              : "mr-auto  "
          }`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
}
